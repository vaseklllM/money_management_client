import { client } from "@/providers/Apollo"
import { useQuery } from "@apollo/client"
import Link from "next/link"
import React, { ReactElement } from "react"
import CURRENCY_ACCOUNTS from "./currencyAccounts.gql"
import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()

interface ICA {
  currencyAccounts: {
    id: string
    value: number
    currency: {
      historyCourseInUAH: {
        price: number
      }[]
    }
  }[]
}

export default function Page(props): ReactElement {
  // const { data, loading } = useQuery<ICA>(CURRENCY_ACCOUNTS)

  const data = "data"
  const loading = false

  console.log(publicRuntimeConfig)

  if (loading) return <div>loading...</div>

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Link href='/currencies'>
        <a>back</a>
      </Link>
    </div>
  )
}

export async function getServerSideProps({ req }) {
  if (!req) {
    return {
      props: { data: null },
    }
  }

  console.log(req.headers)

  const res = await fetch("https://api.github.com/repos/vercel/next.js")
  const json = await res.json()

  // const { data } = await client.query({
  //   query: CURRENCY_ACCOUNTS,
  // })

  // console.log(data)

  return { props: { data: json.stargazers_count } }
}
