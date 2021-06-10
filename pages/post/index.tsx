import { addApolloState, initializeApollo } from "@/providers/Apollo/apolloClient"
import Link from "next/link"
import React, { ReactElement /* useEffect */ } from "react"
import CURRENCIES from "./currencies.gql"
import PostItem from "./PostItem"
// import { client } from "@/providers/Apollo"

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
  // await client.query({
  //   query: CURRENCIES,
  // })

  // return {
  //   props: {},
  // }

  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: CURRENCIES,
  })

  return addApolloState(apolloClient, {
    props: {},
  })
}
