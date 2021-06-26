import { useQuery } from "@apollo/client"
import React, { ReactElement } from "react"
import CURRENCIES from "../currencies.gql"

interface Props {
  text?: string
}

export default function PostItem({ text = "test1" }: Props): ReactElement {
  // const { data, loading } = useQuery(CURRENCIES, {
  //   variables: {
  //     numberOfHistoryItems: 5,
  //   },
  // })

  // if (loading || !data) return <div>loading</div>

  return <p>{text}</p>

  // return <pre>{JSON.stringify(data, null, 2)}</pre>

  // return (
  //   <div>
  //     {data.currencyAccounts.map((i) => (
  //       <div key={i.id}>{i.name}</div>
  //     ))}
  //   </div>
  // )
}
