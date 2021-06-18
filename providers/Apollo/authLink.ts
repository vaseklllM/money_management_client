import { setContext } from "@apollo/client/link/context"
import getConfig from "next/config"

const { serverRuntimeConfig } = getConfig()

const authLink = setContext((_, req) => {
  const isServer = typeof window === "undefined"

  if (isServer) {
    const token = serverRuntimeConfig.token

    // console.log(localStorage.getItem("token"))

    return {
      headers: {
        ...req.headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    }
  } else {
    const token = localStorage.getItem("token")
    return {
      headers: {
        ...req.headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    }
  }
})

export default authLink
