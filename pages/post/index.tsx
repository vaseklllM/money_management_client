// import { client } from "@/providers/Apollo"
import { addApolloState, initializeApollo } from "@/providers/Apollo/apolloClient"
import { useQuery } from "@apollo/client"
import Link from "next/link"
import React, { ReactElement, useEffect, useState } from "react"
import CURRENCY_ACCOUNTS from "./currencyAccounts.gql"
// import getConfig from "next/config"

// const { publicRuntimeConfig } = getConfig()

export default function Page(props): ReactElement {
  const [data, setData] = useState(props.data)
  const [loading, setLoading] = useState(props.loading)

  console.log(props)

  async function getData() {
    const data = await getDataInPause()
    setData(data)
    setLoading(false)
  }

  useEffect(() => {
    if (props.loading) {
      getData()
    }
  }, [])
  // const { data, loading } = useQuery(CURRENCY_ACCOUNTS)

  // console.log(loading, data)

  // const data = "data"
  // const loading = false

  return (
    <div>
      {loading ? <div>loading</div> : <pre>{JSON.stringify(data, null, 2)}</pre>}
      <Link href='/currencies'>
        <a>back</a>
      </Link>
    </div>
  )
}

async function getDataInPause() {
  // const res = await fetch("https://api.github.com/repos/vercel/next.js")
  // const json = await res.json()

  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: CURRENCY_ACCOUNTS,
  })

  return new Promise((res) => {
    setTimeout(() => {
      res(data)
    }, 1000)
  })
}

// Page.getInitialProps = async ({ req }) => {
//   if (!req) {
//     return { data: null, loading: true }
//   }

//   const data = await getDataInPause()

//   return { data, loading: false }
// }

// This function gets called at build time
export async function getStaticProps({ req }) {
  if (!req) {
    return {
      props: { data: null, loading: true },
    }
  }

  const data = await getDataInPause()

  return { props: { data, loading: false } }

  // return {
  //   props: { data: null, loading: true },
  // }
}

// export async function getServerSideProps(/* { req } */) {
// if (!req) {
//   return {
//     props: { data: null, loading: true },
//   }
// }

//   const data = await getData()

//   return { props: { data, loading: false } }

//   // const { data } = await client.query({
//   //   query: CURRENCY_ACCOUNTS,
//   // })

//   // const apolloClient = initializeApollo()

//   // const { data, loading } = await apolloClient.query({
//   //   query: CURRENCY_ACCOUNTS,

//   // })

//   // return addApolloState(apolloClient, {
//   //   props: { data, loading },
//   // })
// }
