import { useQuery } from "@apollo/client"
import React, { ReactElement, useContext } from "react"
import { PostPageContext } from ".."
import CURRENCIES from "../currencies.gql"

export default function PostItem(): ReactElement {
  const { data, loading } = useQuery(CURRENCIES, {
    variables: {
      numberOfHistoryItems: 5,
    },
  })

  // const {
  //   currencies: { data, loading },
  // } = useContext(PostPageContext)

  if (loading || !data) return <div>loading</div>

  return <pre>{JSON.stringify(data, null, 2)}</pre>

  // return (
  //   <div>
  //     {data.currencyAccounts.map((i) => (
  //       <div key={i.id}> {i.name}</div>
  //     ))}
  //   </div>
  // )
}
