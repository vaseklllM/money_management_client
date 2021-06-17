import FinanceContentBlock from "@/components/finance/FinanceContentBlock"
import React, { ReactElement } from "react"
import ExchangeRatesBody from "./ExchangeRatesBody"
import ExchangeRatesTitle from "./ExchangeRatesTitle"

export default function ExchangeRatesBlock(): ReactElement {
  return (
    <FinanceContentBlock>
      <ExchangeRatesTitle />
      <ExchangeRatesBody />
    </FinanceContentBlock>
  )
}
