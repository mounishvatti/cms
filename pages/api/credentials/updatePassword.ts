"use server";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/prisma/prismaClient";
import bcrypt from "bcrypt";
import { z } from "zod";
import rateLimit from "express-rate-limit";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Configure rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // limit each IP to 5 requests per windowMs
    message: "Too many password update attempts. Please try again later.",
});

// Validation schema for password update input
const updatePasswordSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    oldPassword: z.string(),
    newPassword: z.string(),
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    try {
        // Apply rate limiting
        await limiter(req, res);
        // Parse and validate the input
        const updatePasswordData = updatePasswordSchema.parse(req.body);

        // Find the user by email
        const user = await prisma.user.findUnique({
            where: {
                email: updatePasswordData.email,
            },
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare the password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(
            updatePasswordData.oldPassword,
            user.password || "",
        );
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(
            updatePasswordData.newPassword,
            10,
        );

        // Update the user's password
        await prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                password: hashedPassword,
            },
        });

        // Send notification email about the password change
        await resend.emails.send({
            from: "support@yourdomain.com",
            to: user.email || updatePasswordData.email,
            subject: "Your password has been changed",
            html:
                "<p>Your password was successfully updated. If this was not you, please contact support immediately.</p>",
        });

        res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
        console.error("Error in login handler:", error);
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                message: "Validation Error",
                errors: error.errors,
            });
        }
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
