import { useQuery } from "@apollo/client"
import React, { ReactElement } from "react"
import CURRENCIES from "../currencies.gql"

export default function PostItem({ data, loading }): ReactElement {
  // const { data, loading } = useQuery(CURRENCIES/* , { fetchPolicy: "network-only" } */)

  if (loading) return <pre>loading</pre>

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
