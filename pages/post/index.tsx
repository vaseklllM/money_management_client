import { addApolloState, initializeApollo } from "@/providers/Apollo/apolloClient"
import Link from "next/link"
import React, { ReactElement } from "react"
import CURRENCIES from "./currencies.gql"
import PostItem from "./PostItem"

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

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: CURRENCIES,
  })

  return addApolloState(apolloClient, {
    props: {},
  })
}
