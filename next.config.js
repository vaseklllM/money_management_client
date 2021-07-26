// next.config.js
const withImages = require("next-images")

const configuration = {
  dynamicAssetPrefix: true,
  webpackDevMiddleware: (config) => {
    return config
  },
  webpack5: true,
}

module.exports = withImages(configuration)
