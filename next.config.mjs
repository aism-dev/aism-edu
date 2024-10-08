/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "aism-edu.sirv.com",
                pathname: "/**",
                port: "",
            }
        ]
    }
};

export default nextConfig;
