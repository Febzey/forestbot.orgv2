/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "**"
        }], 
    },
    async headers() {   
        return [
            {
                source: "/:path*{/}?",
                headers: [
                    {
                        key: 'X-Accel-Buffering',
                        value: 'no',
                    }
                ]
            }
        ]
    }
};

export default nextConfig;
