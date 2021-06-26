import { useQuery } from "@apollo/client"
import React, { ReactElement } from "react"
// import CURRENCIES from "../currencies.gql"
// import { gql } from "@apollo/client"
import { CURRENCIES, currenciesData, currenciesVariables } from "../currencies"

// const CURRENCIES = gql`
//   query {
//     currencies {
//       id
//       code
//     }
//   }
// `

interface Props {
  text?: string
}

export default function PostItem({ text = "test1" }: Props): ReactElement {
  const { data, loading } = useQuery<currenciesData, currenciesVariables>(CURRENCIES, {
    variables: {
      numberOfHistoryItems: 5,
    },
  })

  if (loading || !data) return <div>loading</div>

  // return <span>{text}</span>

  // return <pre>{JSON.stringify(data, null, 2)}</pre>

  return <div className='t1'>{text}</div>
  // return <div className='t1' >{data.currencies[0].code}</div>

  // return (
  //   <div>
  //     {data.currencies.map((i) => (
  //       <div key={i.id}>{i.code}</div>
  //     ))}
  //   </div>
  // )
}
