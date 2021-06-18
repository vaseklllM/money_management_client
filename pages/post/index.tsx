import { addApolloState, initializeApollo } from "@/providers/Apollo/apolloClient"
import { GetServerSideProps } from "next"
import Link from "next/link"
import React, { ReactElement } from "react"
import CURRENCIES from "./currencies.gql"
import PostItem from "./PostItem"
import getConfig from "next/config"

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

export default function Page(): ReactElement {
  return (
    <div>
      <PostItem />
      <Link href='/currencies'>
        <a>back</a>
      </Link>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  serverRuntimeConfig.token = req.cookies.token

  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: CURRENCIES,
  })

  return addApolloState(apolloClient, {
    props: {},
  })
}
