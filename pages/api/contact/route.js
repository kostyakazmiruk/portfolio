import { EmailTemplate } from "../../../components/EmailTemplate"
import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
    const { name, email, subject, message } = await req.body()
    try {
        const data = await resend.emails.send({
            from: "info@kostyakazmiruk.com",
            to: email,
            subject: subject,
            react: EmailTemplate({ name: message }),
        })

        if (data.status === "success") {
            return NextResponse.json({ message: "Email Successfully Sent!" })
        }
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ error })
    }
}
