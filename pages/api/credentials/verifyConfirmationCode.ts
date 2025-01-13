"use server";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/prisma/prismaClient";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const updateEmailSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    newemail: z.string().email({ message: "Invalid email address" }),
    confirmationCode: z.string(),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    try {
        const updateEmailData = updateEmailSchema.parse(req.body);

        // Find the user by email
        const user = await prisma.user.findUnique({
            where: {
                email: updateEmailData.email,
            },
        });

        // If user does not exist
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Find the confirmation code by email
        const confirmationCode = await prisma.confirmationCode.findUnique({
            where: {
                newemail: updateEmailData.newemail,
                code: updateEmailData.confirmationCode,
            },
        });

        // If confirmation code does not exist
        if (!confirmationCode) {
            return res.status(404).json({ message: "Confirmation code not found" });
        }

        // check if the user has entered the correct confirmation code
        if (confirmationCode.code !== updateEmailData.confirmationCode) {
            return res.status(401).json({ message: "Invalid confirmation code" });
        }

        // check if the confirmation code has expired
        if (confirmationCode.expiresAt < new Date()) {
            return res.status(401).json({ message: "Confirmation code expired" });
        }

        // Update the user's email
        await prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                email: updateEmailData.newemail,
            },
        });

        // Send notification email about the password change
        await resend.emails.send({
            from: "service.cmsonline@gmail.com",
            to: user.email || updateEmailData.email,
            subject: "Your email has been changed",
            html:
                "<p>Your email was updated to " + updateEmailData.newemail + ". If this was not you, please contact support at support@yourdomain.com immediately.</p>",
        });

        res.status(200).json({ message: "Email updated successfully" });
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