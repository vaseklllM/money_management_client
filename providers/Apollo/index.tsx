import React, { ReactElement } from "react"
import { ApolloProvider } from "@apollo/client/react"
import { ApolloClient, from, InMemoryCache } from "@apollo/client"
import errorLink from "./errorLink"
import authLink from "./authLink"
import httpLink from "./httpLink"

// import { useApollo } from "./apolloClient"

export const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache(),
})

interface Props {
  children: ReactElement | ReactElement[]
  pageProps: any
}

export default function Apollo(props: Props): ReactElement {
  const { children /* pageProps */ } = props

  // const apolloClient = useApollo(pageProps)

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
