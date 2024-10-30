import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import React, { useContext } from 'react';
import { OnApproveData, OnApproveActions } from "@paypal/paypal-js";
import { FormBodyContext } from "./FormBody";

interface PayPalButtonProps {
  onSuccess?: (details: any) => void;
  onError?: (error: any) => void;
}

const PayPalButton: React.FC<PayPalButtonProps> = ({ onSuccess, onError }) => {
  const APPLICATION_FEE = "150.00";
  const { formData } = useContext(FormBodyContext);

  const handleSubmit = () => {
    
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

export default PayPalButton;