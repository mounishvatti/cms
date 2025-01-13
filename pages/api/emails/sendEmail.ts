import nodemailer from "nodemailer";

export default async function sendEmail(email: string, subject: string, body: string) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    try {
        await transporter.sendMail({
            from: "service.cmsonline@gmail.com",
            to: email,
            subject: subject,
            html: body,
        });
    } catch (error) {
        console.error("Error sending email:", error);
    }
}