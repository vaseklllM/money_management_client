import React, { ReactElement } from "react"
import CurrencyRatioBody from "./CurrencyRatioBody"
import { ICurrencyRatioData } from "./interface"

interface Props {}

export default function CurrencyRatio({}: Props): ReactElement {
  const data: ICurrencyRatioData[] = [
    { symbol: "$", code: "USD", value: 123 },
    { symbol: "₴", code: "UAH", value: 456 },
    { symbol: "€", code: "EUR", value: 789 },
  ]

  return (
    <div>
      <CurrencyRatioBody data={data} />
    </div>
  )
}
