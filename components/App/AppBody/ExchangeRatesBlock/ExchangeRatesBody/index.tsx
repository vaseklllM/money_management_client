import React, { ReactElement } from "react"
import ExchangeRatesGraphItem from "./ExchangeRatesGraphItem"
import CURRENCIES from "./currencies.gql"
import { useQuery } from "@apollo/client"
import { ICurrenciesData } from "./interface"
import classes from "./style.module.scss"

interface ICurrenciesVariables {
  numberOfHistoryItems: number
}

export default function ExchangeRatesBody(): ReactElement {
  const { data, loading } = useQuery<ICurrenciesData, ICurrenciesVariables>(CURRENCIES, {
    variables: {
      numberOfHistoryItems: 10,
    },
  })

  if (loading) return null

  const currencies = data.currencies.filter((i) => i.historyCourseInUAH[0].price !== 1)

  return (
    <div className={classes.body}>
      {currencies.map((i, idx) => (
        <ExchangeRatesGraphItem key={idx} data={i} />
      ))}
    </div>
  )
}
