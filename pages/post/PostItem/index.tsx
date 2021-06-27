import { useQuery } from "@apollo/client"
import React, { ReactElement } from "react"
import { CURRENCIES, currenciesData, currenciesVariables } from "../currencies.gql"

interface Props {
  text?: string
}

export default function PostItem({ text = "test1" }: Props): ReactElement {
  const { data, loading } = useQuery<currenciesData, currenciesVariables>(CURRENCIES)

  // console.log(data, loading)

  if (loading || !data) return <p>loading</p>

  // return <p>{text}</p>

  // return <pre>{JSON.stringify(data, null, 2)}</pre>

  // return <div className='t1'>{text}</div>
  return <p className='t1'>{data.currencies[0].code}</p>

  // return (
  //   <div>
  //     {data.currencies.map((i) => (
  //       <div key={i.id}>{i.code}</div>
  //     ))}
  //   </div>
  // )
}
