import React, { ReactElement } from "react"
import { ApolloProvider } from "@apollo/client/react"
import { useApollo } from "./apolloClient"

interface Props {
  children: ReactElement | ReactElement[]
  pageProps: any
}

export default function Apollo(props: Props): ReactElement {
  const { children, pageProps } = props

  const apolloClient = useApollo(pageProps.initialApolloState)

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}
