import React from "react"

interface EmailTemplateProps {
    name: string
    email?: string
    subject?: string
    message?: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
}) => {
    return (
        <div>
            <h1>Welcome, {name}</h1>
        </div>
    )
}

export default EmailTemplate
