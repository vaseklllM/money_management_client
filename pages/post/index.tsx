// import { addApolloState, initializeApollo } from "@/providers/Apollo/apolloClient"
import { GetServerSideProps } from "next"
import Link from "next/link"
import React, { ReactElement } from "react"
import CURRENCIES from "./currencies.gql"
import PostItem from "./PostItem"
import getConfig from "next/config"
// import { client } from "@/providers/Apollo"
import { initializeApollo } from "@/providers/Apollo/apolloClient"

const { serverRuntimeConfig } = getConfig()

export const PostPageContext = React.createContext({
  currencies: { data: null, loading: true },
})

export default function Page(props): ReactElement {
  const { currencies } = props

  return (
    <PostPageContext.Provider value={{ currencies }}>
      <Link href='/'>
        <a>back</a>
      </Link>
      <PostItem />
    </PostPageContext.Provider>
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

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
//   serverRuntimeConfig.token = req.cookies.token

//   const currencies = await client.query({
//     query: CURRENCIES,
//     variables: {
//       numberOfHistoryItems: 5,
//     },
//   })

//   return {
//     props: { currencies: { data: currencies.data, loading: currencies.loading } },
//   }

//   // const apolloClient = initializeApollo()

//   // await apolloClient.query(
//   //   {
//   //     query: CURRENCIES,
//   //   },
//   //   { fetchPolicy: "cache-and-network" }
//   // )

//   // return addApolloState(apolloClient, {
//   //   props: {},
//   // })
// }
