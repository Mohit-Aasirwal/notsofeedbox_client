/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["www.google.com", "images.unsplash.com", "www.github.com"],
	},
};

module.exports = nextConfig;
