import { FormData } from "@/app/(pages)/acedemic-programs/application-form/[program]/Components/FormBody";
import { Socials } from "../Socials";

export const applicationReceived = ({ formData, social }: { formData: FormData, social: Socials}) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Application Received</title>
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

            .header {
                background: rgba(255, 255, 255, 0.1);
                color: #ffffff;
                padding: 20px;
                text-align: center;
                border-top: 1px solid rgba(255, 255, 255, 0.2);
            }

            .header h1 {
                margin: 0;
                font-size: 28px;
                font-weight: 600;
                letter-spacing: 0.5px;
            }

            .content {
                padding: 30px;
            }

            .section {
                margin-bottom: 25px;
                background: #f8fafc;
                border-radius: 6px;
                padding: 20px;
            }

            .section-title {
                color: #183d74;
                font-size: 20px;
                font-weight: 600;
                margin-bottom: 15px;
                padding-bottom: 8px;
                border-bottom: 2px solid #e2e8f0;
            }

            .field {
                margin: 12px 0;
                display: flex;
                flex-wrap: wrap;
            }

            .field-label {
                font-weight: 600;
                width: 160px;
                color: #4a5568;
            }

            .field-value {
                flex: 1;
                color: #2d3748;
                min-width: 200px;
            }

            .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e2e8f0;
                color: #4a5568;
            }

            .signature {
                margin-top: 20px;
                color: #4a5568;
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

                .field {
                    flex-direction: column;
                }

                .field-label {
                    width: 100%;
                    margin-bottom: 4px;
                }

                .field-value {
                    width: 100%;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="brand-header">
                <img src="https://aism-edu.sirv.com/icons/AISM-white.png" width="50" alt="AISM Logo" class="brand-logo" />
                <div class="header">
                    <h1>New Application Received</h1>
                </div>
            </div>
            <div class="content">
                <p>Dear AISM Admissions Team,</p>
                <p style="margin: 20px 0;">You have received a new application with the following details:</p>

                <div class="section">
                    <div class="section-title">Personal Information</div>
                    <div class="field">
                        <span class="field-label">Full Name:</span>
                        <span class="field-value">${formData.fullName}</span>
                    </div>
                    <div class="field">
                        <span class="field-label">Email:</span>
                        <span class="field-value">${formData.email}</span>
                    </div>
                    <div class="field">
                        <span class="field-label">Phone:</span>
                        <span class="field-value">${formData.phone}</span>
                    </div>
                    <div class="field">
                        <span class="field-label">Address:</span>
                        <span class="field-value">${formData.address}</span>
                    </div>
                    <div class="field">
                        <span class="field-label">Nationality:</span>
                        <span class="field-value">${formData.nationality}</span>
                    </div>
                    <div class="field">
                        <span class="field-label">Gender:</span>
                        <span class="field-value">${formData.gender}</span>
                    </div>
                    <div class="field">
                        <span class="field-label">Date of Birth:</span>
                        <span class="field-value">${formData.birthDate}</span>
                    </div>
                </div>

                <div class="section">
                    <div class="section-title">Educational Background</div>
                    <div class="field">
                        <span class="field-label">High School:</span>
                        <span class="field-value">${formData.highSchool}</span>
                    </div>
                    <div class="field">
                        <span class="field-label">Location:</span>
                        <span class="field-value">${formData.highSchoolLocation}</span>
                    </div>
                    <div class="field">
                        <span class="field-label">Graduation Year:</span>
                        <span class="field-value">${formData.highSchoolGraduation}</span>
                    </div>
                    <div class="field">
                        <span class="field-label">University:</span>
                        <span class="field-value">${formData.university}</span>
                    </div>
                    <div class="field">
                        <span class="field-label">Major/Program:</span>
                        <span class="field-value">${formData.major}</span>
                    </div>
                </div>

                <div class="section">
                    <div class="section-title">Program Details</div>
                    <div class="field">
                        <span class="field-label">Intended Program:</span>
                        <span class="field-value">${formData.intendedProgram}</span>
                    </div>
                    <div class="field">
                        <span class="field-label">Preferred Start Date:</span>
                        <span class="field-value">${formData.preferredStartDate}</span>
                    </div>
                    <div class="field">
                        <span class="field-label">Transfer Student:</span>
                        <span class="field-value">{{isTransferStudent ? 'Yes' : '$NformData.'}</span>
                    </div>
                </div>

                <div class="footer">
                    <p>Thank you for reviewing this application.</p>
                    <div class="signature">
                        <p>Best regards,</p>
                        <p>AISM Application System</p>
                    </div>
                </div>
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
`