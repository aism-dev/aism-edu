/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "aism-edu.sirv.com",
                pathname: "/**",
                port: "",
            },
            {
                protocol: "https",
                hostname: "unsplash.it",
                pathname: "/**",
                port: "",
            },
        ]
    }
};

export default nextConfig;
