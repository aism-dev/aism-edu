import checkoutNodeJssdk from '@paypal/checkout-server-sdk';

const configureEnvironment = function () {
    const clientId = process.env.NEXT_PUBLIC_SANDBOX_CLIENT_ID;
    const clientSecret = process.env.NEXT_PUBLIC_SANDBOX_SECRET;

    if (!clientId) throw new Error('Missing PAYPAL_CLIENT_ID environment variable');
    if (!clientSecret) throw new Error('Missing PAYPAL_CLIENT_ID environment variable');


    return process.env.NODE_ENV === 'production'
        ? new checkoutNodeJssdk.core.LiveEnvironment(clientId, clientSecret)
        : new checkoutNodeJssdk.core.SandboxEnvironment(clientId, clientSecret);
}

const client = function () {
    return new checkoutNodeJssdk.core.PayPalHttpClient(configureEnvironment());
}

export default client;