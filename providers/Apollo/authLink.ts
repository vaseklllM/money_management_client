import { setContext } from "@apollo/client/link/context"
import getConfig from "next/config"
import Cookies from "js-cookie"

const { serverRuntimeConfig } = getConfig()

const authLink = setContext((_, req) => {
  const token = serverRuntimeConfig.token || Cookies.get("token")

  return {
    headers: {
      ...req.headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }
})

export default authLink
