import { onError } from "@apollo/client/link/error"
import Cookies from "js-cookie"
import Router from "next/router"

const errorLink = onError((params) => {
  const { graphQLErrors, networkError, response } = params

  const isServer = typeof window === "undefined"

  if (graphQLErrors) {
    for (let err of graphQLErrors) {
      /** Обработка Unauthorized */
      if (err?.extensions?.exception?.status === 401) {
        if (!isServer) authError()
        response.errors = undefined
      }
    }
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
  }
})

/** Перенаправлення в випадку якщо користувач не авторизований */
function authError() {
  Cookies.remove("token")

  const { pathname } = Router

  if (pathname !== "/auth") {
    Router.push("/auth")
  }
}

export default errorLink
