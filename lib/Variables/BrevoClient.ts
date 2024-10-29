type EmailRecipient = {
    name: string;
    email: string;
};

export interface EmailRequest {
    recipients: EmailRecipient[];
    subject: string;
    htmlContent: string;
    senderName?: string;
    senderEmail?: string;
    replyTo?: EmailRecipient;
};

class BrevoClient {
    private readonly apiKey: string;
    private readonly baseUrlEmail = "https://api.brevo.com/v3/smtp/email";

    constructor() {
        this.apiKey = process.env.NEXT_PUBLIC_SMTP_API!;
    }

    async sendEmail({
        htmlContent,
        recipients,
        subject,
        replyTo,
        senderName = "CashGo No reply",
        senderEmail = "noreply@credilityfin.com",
    }: EmailRequest): Promise<Response> {
        const headers = new Headers({
            'accept': 'application/json',
            'api-key': this.apiKey,
            'content-type': 'application/json',
        });

        const body = JSON.stringify({
            sender: {
                name: senderName,
                email: senderEmail,
            },
            to: recipients,
            ...(replyTo && { replyTo }),
            subject,
            htmlContent,
        });

        const response = await fetch(this.baseUrlEmail, {
            method: 'POST',
            headers,
            body,
        });

        return response;
    }
}

export default BrevoClient;