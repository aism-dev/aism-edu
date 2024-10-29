import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PayPalPayment() {
    return (
        <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_SANDBOX_CLIENT_ID!, currency: "USD" }}>
            <PayPalButtons
                className="w-full"
                style={{ layout: "horizontal" }}
                onApprove={async (data, actions) => {
                    const order = actions.order?.capture();
                    console.log('Order:', order);
                    alert('Transaction completed by ' + data.payerID);
                }}
            />
        </PayPalScriptProvider>
    );
}

export default PayPalPayment;