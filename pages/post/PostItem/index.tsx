import { useQuery } from "@apollo/client"
import React, { ReactElement } from "react"
import CURRENCIES from "../currencies.gql"

export default function PostItem(): ReactElement {
  const { data, loading } = useQuery(CURRENCIES)

  return (
    <div>{loading ? <div>loading</div> : <pre>{JSON.stringify(data, null, 2)}</pre>}</div>
  )
}
