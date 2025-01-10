"use server";
import { NextApiRequest, NextApiResponse } from "next";
import generateConfirmationCode from "@/pages/functions/generate-confirmation-code";
import { prisma } from "@/prisma/prismaClient";
import { z } from "zod";
import { Resend } from "resend";

const resend_api_key = process.env.RESEND_API_KEY;
const resend = new Resend(resend_api_key);

const updateEmailSchema = z.object({
    oldemail: z.string().email({ message: "Invalid email address" }),
    newemail: z.string().email({ message: "Invalid email address" }),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    try {
        const updateEmailData = updateEmailSchema.parse(req.body);
        const confirmationCode = generateConfirmationCode();

        // Store the confirmation code with the user's current email or session in the database
        await prisma.confirmationCode.create({
            data: {
                oldemail: updateEmailData.oldemail,
                newemail: updateEmailData.newemail,
                code: confirmationCode,
                expiresAt: new Date(Date.now() + 15 * 60 * 1000), // 15 minutes from now
            },
        });

        // Send the confirmation code via email
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: updateEmailData.newemail,
            subject: "Confirmation code for email update",
            html: `<p>Confirmation code for email update is ${confirmationCode}</p>`,
        });

        res.status(200).json({ message: "Confirmation code sent" });
    } catch (error) {
        console.error("Error in updateEmail handler:", error);
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                message: "Validation Error",
                errors: error.errors,
            });
        }
        return res.status(500).json({ message: "Internal Server Error" });
    }
}