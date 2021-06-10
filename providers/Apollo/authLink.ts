import { setContext } from "@apollo/client/link/context"
import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()

const authLink = setContext((_, { headers }) => {
  const isServer = typeof window === "undefined"

  if (isServer) {
    // console.log(2, publicRuntimeConfig)
  } else {
    const token = localStorage.getItem("token")
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    }
  }
})

export default authLink
