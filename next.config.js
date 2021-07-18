// next.config.js
const withImages = require("next-images")

const configuration = {
  dynamicAssetPrefix: true,
  webpackDevMiddleware: (config) => {
    return config
  },
}

module.exports = withImages(configuration)
