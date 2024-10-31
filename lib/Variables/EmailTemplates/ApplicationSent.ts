import { FormData } from "@/app/(pages)/acedemic-programs/application-form/Components/FormBody";
import { Socials } from "../Socials";

export const applicationSent = ({ formData, social, applicationLink }: { formData: FormData, social: Socials, applicationLink: string }) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Application Confirmation</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Segoe UI', Arial, sans-serif;
                color: #2d3748;
                line-height: 1.6;
                background-color: #f7fafc;
            }

            .container {
                max-width: 600px;
                margin: 20px auto;
                background: #ffffff;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }

            .brand-header {
                background: linear-gradient(135deg, #183d74 0%, #2c5282 100%);
                padding: 20px;
                text-align: center;
            }

            .brand-logo {
                max-width: 200px;
                height: auto;
                margin-bottom: 15px;
            }

            .content {
                padding: 40px 30px;
            }

            .thank-you {
                font-size: 24px;
                color: #183d74;
                margin-bottom: 20px;
                font-weight: 600;
            }

            .attachment-note {
                background: #edf2f7;
                border-left: 4px solid #183d74;
                padding: 15px;
                margin: 25px 0;
                border-radius: 0 6px 6px 0;
            }

            .download-button {
                display: inline-block;
                padding: 10px 20px;
                background-color: #183d74;
                color: #ffffff;
                text-decoration: none;
                border-radius: 5px;
                margin-top: 15px;
                font-weight: bold;
            }

            .application-summary {
                margin: 25px 0;
                padding: 20px;
                background: #f8fafc;
                border-radius: 6px;
            }

            .summary-item {
                margin-bottom: 10px;
            }

            .summary-label {
                font-weight: 600;
                color: #4a5568;
            }

            .contact-support {
                background: #f8fafc;
                border-radius: 6px;
                padding: 20px;
                margin-top: 25px;
            }

            .brand-footer {
                background: #183d74;
                color: #ffffff;
                padding: 20px;
                text-align: center;
                font-size: 14px;
            }

            .social-links {
                margin: 15px 0;
            }

            .social-links a {
                color: #ffffff;
                text-decoration: none;
                margin: 0 10px;
            }

            .contact-info {
                font-size: 12px;
                color: rgba(255, 255, 255, 0.8);
                margin-top: 15px;
            }

            @media (max-width: 600px) {
                .container {
                    margin: 10px;
                    border-radius: 0;
                }

                .content {
                    padding: 20px;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="brand-header">
                <img src="https://aism-edu.sirv.com/icons/AISM-white.png" width="50" alt="AISM Logo" class="brand-logo" />
            </div>
            <div class="content">
                <div class="thank-you">Thank You for Your Application</div>
                
                <p>Dear ${formData.fullName},</p>
                
                <p>Thank you for applying to the American International School of Medicine. We have successfully received your application for the ${formData.intendedProgram} program.</p>
                
                <div class="attachment-note">
                    <p><strong>Access Your Application Form</strong></p>
                    <p>We’ve attached a URL to your application form. You can <a href="${applicationLink}" target="_blank">view it here</a> or click the button below to access it directly.</p>
                    <a href="${applicationLink}" target="_blank" class="download-button">Download Application Form</a>
                </div>

                <div class="application-summary">
                    <h2 style="color: #183d74; margin-bottom: 15px;">Application Summary</h2>
                    <div class="summary-item">
                        <span class="summary-label">Program:</span> ${formData.intendedProgram}
                    </div>
                    <div class="summary-item">
                        <span class="summary-label">Preferred Start Date:</span> ${formData.preferredStartDate}
                    </div>
                </div>

                <div class="contact-support">
                    <p><strong>Need Help?</strong></p>
                    <p>If you have any questions about your application or need assistance, please don't hesitate to contact our admissions team:</p>
                    <p style="margin-top: 10px;">
                        Email: admissions@aism.edu<br>
                        Phone: +1 404 756 6737 
                    </p>
                </div>

                <p style="margin-top: 25px;">Best regards,</p>
                <p>AISM Admissions Team</p>
            </div>
            
            <div class="brand-footer">
                <div class="social-links">
                    <a href="${social.facebook}">Facebook</a> |
                    <a href="${social.twitter}">Twitter</a> |
                    <a href="${social.linkedin}">LinkedIn</a> |
                    <a href="${social.instagram}">Instagram</a>
                </div>
                <div class="contact-info">
                    <p>American International School of Medicine</p>
                    <p>1755 E. Park Blvd, Stone Mountain, Ga 30087 USA</p>
                    <p>Tel: +1 404 756 6737  | Email: info@aism.edu</p>
                </div>
            </div>
        </div>
    </body>
    </html>
`;