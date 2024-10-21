/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {protocol:"https",
                port:"",
                hostname:"images.pexels.com",
                pathname:"/photos/**",
            }
        ]
    }
};

export default nextConfig;
