/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    USER_CREDENTIALS:process.env.USER_CREDENTIALS,
    PASS_CREDENTIALS:process.env.PASS_CREDENTIALS,
  },
}

module.exports = nextConfig
