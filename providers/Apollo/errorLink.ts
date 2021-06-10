import { onError } from "@apollo/client/link/error"
import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()

const errorLink = onError((params) => {
  const { graphQLErrors, networkError, forward, response } = params

  const isServer = typeof window === "undefined"

  if (graphQLErrors) {
    for (let err of graphQLErrors) {
      /** Обработка Unauthorized */
      if (err?.extensions?.exception?.status === 401) {
        if (!isServer) {
          localStorage.removeItem("token")
          if (location.pathname !== "/auth") location.assign("/auth")
        }
        response.errors = undefined
      }
    }
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
  }
})

export default errorLink
