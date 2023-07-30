/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //pass the url of the site you are using webp from
  images: {
    domains: [
      "www.google.com",
      "images.unsplash.com",
      "www.github.com",
      "feedboxclub.onrender.com",
    ],
  },
};

module.exports = nextConfig;
