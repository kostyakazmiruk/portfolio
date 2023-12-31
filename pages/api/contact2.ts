import { EmailTemplate } from "../../components/EmailTemplate"
import { Resend } from "resend"
import type { NextApiResponse, NextApiRequest } from "next"

const resend = new Resend(process.env.RESEND_API_KEY)

type RequestData = {
    name: string
    email: string
    subject: string
    message: string
}
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const data = JSON.stringify(req.body)
    const { name, email, subject, message }: any = data
    console.log("req", req.body())
    // res.status(200).json({ message: "John Doe" })
    try {
        const emailSend = await resend.emails.send({
            from: "kostyakazmiruk@kostyakazmiruk.com",
            to: ["kostyakazmiruk@gmail.com"],
            subject: "this is subject",
            react: EmailTemplate({ name: "mesmy messgaesage" }),
        })
        console.log("me")

        // res.status(200).json({ message: "John Doe" })

        // if (emailSend.status === "success") {
        return res
            .status(200)
            .json({ message: "Email Successfully Sent!", data: data })
        // }
    } catch (error) {
        return res.status(404).json(data)
    }
}
