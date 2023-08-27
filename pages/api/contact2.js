// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

const SecretEmail = process.env.EMAIL
const SecretPass = "fdfsdf"

export default async function handler(req, res) {
    console.log("Body", req.body)
    if (req.method === "POST") {
        const { name, email, message } = req.body
        if (!name && !email && !message && !subject) {
            res.status(400).json({ message: "Bad request" })
        }
        // Configure nodemailer with your email service details
        const transporter = nodemailer.createTransport({
            service: "gmail", // e.g., Gmail
            auth: {
                user: SecretEmail,
                pass: SecretPass,
            },
        })

        try {
            const mailOptions = {
                from: SecretEmail,
                to: SecretEmail,
                subject: subject,
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            }

            // Send the email
            await transporter.sendMail(mailOptions)

            res.status(200).json({ message: "Email sent successfully" })
        } catch (error) {
            res.status(500).json({ message: "Error sending email" })
        }
    } else {
        res.status(405).json({ message: "Method not allowed" })
    }
}
