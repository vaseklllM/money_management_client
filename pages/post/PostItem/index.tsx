import { useQuery } from "@apollo/client"
import React, { ReactElement } from "react"
import CURRENCIES from "../currencies.gql"

export default function PostItem(): ReactElement {
  const { data, loading } = useQuery(CURRENCIES, {
    variables: {
      numberOfHistoryItems: 5,
    },
  })

  if (loading || !data) return <div>loading</div>

  return (
    <div>
      {data.currencyAccounts.map((i) => (
        <div key={i.id}>{i.name}</div>
      ))}
    </div>
  )
}
