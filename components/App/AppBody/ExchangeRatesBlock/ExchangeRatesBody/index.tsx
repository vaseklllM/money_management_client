import React, { ReactElement } from "react"
import ExchangeRatesGraphItem from "./ExchangeRatesGraphItem"
import { useQuery } from "@apollo/client"
import { ICurrenciesData, ICurrency } from "./interface"
import classes from "./style.module.scss"
import { CURRENCIES } from "@/components/App/currencies.gql"

interface ICurrenciesVariables {
  numberOfHistoryItems: number
}

export default function ExchangeRatesBody(): ReactElement {
  const { data, loading } = useQuery<ICurrenciesData, ICurrenciesVariables>(CURRENCIES, {
    variables: {
      numberOfHistoryItems: 30,
    },
  })

  if (loading) return null

  const currencies = getCurrencies(data)

  return (
    <div className={classes.body}>
      {currencies.map((i, idx) => (
        <ExchangeRatesGraphItem key={idx} data={i} />
      ))}
    </div>
  )
}

function getCurrencies(data: ICurrenciesData): ICurrency[] {
  const arr: ICurrency[] = []

  data.currencies.forEach((currency) => {
    if (currency.historyCourseInUAH[0].price === 1) return undefined
    arr.push({
      ...currency,
      historyCourseInUAH: [...currency.historyCourseInUAH].reverse(),
    })
  })

  return arr
}
