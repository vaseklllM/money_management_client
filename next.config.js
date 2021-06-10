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
  publicRuntimeConfig: {
    // Will be available on both server and client
    token: null,
  },
}

module.exports = withImages(configuration)
