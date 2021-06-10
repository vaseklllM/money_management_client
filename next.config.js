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
    // Буде доступний як на сервері, так і на клієнті
    token: 'asd',
    // token: window?.localStorage?.getItem('token') || 'asd',
  },
}

module.exports = withImages(configuration)
