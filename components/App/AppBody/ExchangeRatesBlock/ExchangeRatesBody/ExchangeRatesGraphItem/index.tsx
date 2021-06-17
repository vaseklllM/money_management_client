import React, { ReactElement } from "react"
import { ICurrency } from "../interface"

interface Props {
  data: ICurrency
}

export default function ExchangeRatesGraphItem({ data }: Props): ReactElement {
  console.log(data)
  return <div>ExchangeRatesGraphItem</div>
}
