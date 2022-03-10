require('dotenv').config()
const withImages = require('next-images')

module.exports = withImages()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HOST_APP: process.env.HOST_APP,
  }
}

module.exports = nextConfig
