import { GetServerSideProps } from "next"
import Link from "next/link"
import React, { ReactElement } from "react"
import PostItem from "./PostItem"
import getConfig from "next/config"
import { initializeApollo } from "@/providers/Apollo/apolloClient"
import { CURRENCIES } from "./currencies.gql"

const { serverRuntimeConfig } = getConfig()

export default function Page(): ReactElement {
  return (
    <>
      <Link href='/'>
        <a>back</a>
      </Link>
      <PostItem />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  serverRuntimeConfig.token = req.cookies.token

  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: CURRENCIES,
    variables: {
      numberOfHistoryItems: 5,
    },
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}
