import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import React, { useContext } from 'react';
import { OnApproveData, OnApproveActions } from "@paypal/paypal-js";
import BrevoClient, { EmailRequest } from "@/lib/Variables/BrevoClient";
import { applicationReceived } from "@/lib/Variables/EmailTemplates/ApplicationReceived";
import { socials } from "@/lib/Variables/Socials";
import toast from "react-hot-toast";
import { FormBodyContext } from "../FormBody";
import { applicationSent } from "@/lib/Variables/EmailTemplates/ApplicationSent";

interface PayPalButtonProps {
    onSuccess?: (details: any) => void;
    onError?: (error: any) => void;
}

const PayPalPayment: React.FC<PayPalButtonProps> = ({ onSuccess, onError }) => {
    const APPLICATION_FEE = "150.00";
    const { formData } = useContext(FormBodyContext);

    const performSubmit = async () => {
        const smtpCLient = new BrevoClient();
        const template = applicationReceived({ formData, social: socials });
        const templateApplicant = applicationSent({ formData, social: socials, applicationLink: "#" });
        const payloadToAism: EmailRequest = {
            htmlContent: template,
            recipients: [
                { email: "fabianajokubi@gmail.com", name: "Admission Board" }
            ],
            subject: "New Application Received",
            replyTo: { email: formData.email, name: formData.fullName },
            senderEmail: formData.email,
            senderName: formData.fullName,
        }
        
        const payloadToApplicant: EmailRequest = {
            htmlContent: templateApplicant,
            recipients: [
                { email: formData.email, name: formData.fullName }
            ],
            subject: "Application Confirmation | AISM",
        }



        await smtpCLient.sendEmail(payloadToAism);
        await smtpCLient.sendEmail(payloadToApplicant);
    }


    const handleSubmit = () => {
        const promise = performSubmit();
        toast.promise(promise, {
            loading: 'Sending Application...',
            success: 'Application Sent Successfully',
            error: 'Error Sending Application',
        });
    }

    return (
        <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_SANDBOX_CLIENT_ID!, currency: "USD" }}>
            <PayPalButtons
                style={{ layout: "vertical" }}
                className="w-full"
                createOrder={(data, actions) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                amount: {
                                    value: APPLICATION_FEE,
                                    currency_code: "USD",
                                    breakdown: {
                                        item_total: {
                                            currency_code: "USD",
                                            value: APPLICATION_FEE
                                        }
                                    }
                                },
                                description: "Application Form Fee",
                                items: [
                                    {
                                        name: "Application Fee",
                                        quantity: "1",
                                        unit_amount: {
                                            currency_code: "USD",
                                            value: APPLICATION_FEE
                                        }
                                    }
                                ]
                            }
                        ]
                    });
                }}
                onApprove={async (data: OnApproveData, actions: OnApproveActions) => {
                    try {
                        if (actions.order) {
                            const details = await actions.order.capture();
                            handleSubmit()
                            console.log("Payment completed successfully:", details);
                            onSuccess?.(details);
                        }
                    } catch (err) {
                        console.error("Capture error:", err);
                        onError?.(err);
                    }
                }}
                onError={(err) => {
                    console.error("Payment error:", err);
                    onError?.(err);
                }}
            />
        </PayPalScriptProvider>
    );
};

export default PayPalPayment;