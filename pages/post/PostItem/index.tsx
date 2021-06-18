import { useQuery } from "@apollo/client"
import React, { ReactElement } from "react"
import CURRENCIES from "../currencies.gql"

export default function PostItem(): ReactElement {
  const { data, loading } = useQuery(CURRENCIES)

  if (loading) return <div>loading</div>

  // console.log(data)

  return (
    <div>
      {/* {data.currencies.map((i) => (
        <div key={i.id}>
          <span>{i.code}</span>
          <span>{i.symbol}</span>
          <span>id: {i.id}</span>
        </div>
      ))} */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
