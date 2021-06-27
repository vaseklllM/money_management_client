// next.config.js
const withImages = require("next-images")

const configuration = {
  dynamicAssetPrefix: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    })
    return config
  },
  webpackDevMiddleware: (config) => {
    return config
  },
}

module.exports = withImages(configuration)
