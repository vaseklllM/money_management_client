// import { addApolloState, initializeApollo } from "@/providers/Apollo/apolloClient"
import { GetServerSideProps } from "next"
import Link from "next/link"
import React, { ReactElement } from "react"
import CURRENCIES from "./currencies.gql"
import PostItem from "./PostItem"
import getConfig from "next/config"
import { client } from "@/providers/Apollo"
// import withApollo from "@/providers/Apollo"

const { serverRuntimeConfig } = getConfig()

export default function Page(props): ReactElement {
  const { currencies } = props

  return (
    <>
      <Link href='/'>
        <a>back</a>
      </Link>
      <PostItem data={currencies.data} loading={currencies.loading} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  serverRuntimeConfig.token = req.cookies.token

  const { data, loading } = await client.query({
    query: CURRENCIES,
  })

  return {
    props: { currencies: { data, loading } },
  }

  // const apolloClient = initializeApollo()

  // await apolloClient.query(
  //   {
  //     query: CURRENCIES,
  //   },
  //   { fetchPolicy: "cache-and-network" }
  // )

  // return addApolloState(apolloClient, {
  //   props: {},
  // })
}
