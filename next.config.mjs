/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Mengaktifkan static exports
  basePath: "/docs", // Ganti dengan nama repository Anda
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
