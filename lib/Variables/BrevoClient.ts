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
        senderName = "AISM No reply",
        senderEmail = "noreply@aism.edu",
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

        try {
            const response = await fetch(this.baseUrlEmail, {
                method: 'POST',
                headers,
                body,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Failed to send email: ${errorData.message ?? errorData}`);
            }

            console.log('Email sent successfully.');

            return response;
        } catch (error) {
            console.error('Error occurred:', error);
            throw new Error(`Error sending email: ${error}`);
        }
    }

    async test({ senderEmail, recipientEmail }: { senderEmail: string, recipientEmail: string }) {
        const apiKey = this.apiKey;

        const emailData = {
            sender: {
                name: "Test Sender",
                email: senderEmail
            },
            to: [
                {
                    email: recipientEmail,
                    name: "Recipient Name"
                }
            ],
            subject: "Testing Brevo API",
            htmlContent: "<p>Congratulations! You successfully sent this email via Brevo SMTP API.</p>",
            textContent: "Congratulations! You successfully sent this email via Brevo SMTP API."
        };

        try {
            const response = await fetch(this.baseUrlEmail, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': apiKey
                },
                body: JSON.stringify(emailData)
            });


            if (response.ok) {
                const data = await response.json();
                console.log('Email sent successfully. Returned data:', data);
            } else {
                const errorData = await response.json();
                console.error('Error occurred:', errorData);
            }
        } catch (error) {
            console.error('Error occurred while sending the email:', error);
        }
    }
}

export default BrevoClient;