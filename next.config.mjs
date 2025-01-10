/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Mengaktifkan static exports
  basePath: "/static", // Ganti dengan nama repository Anda
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
