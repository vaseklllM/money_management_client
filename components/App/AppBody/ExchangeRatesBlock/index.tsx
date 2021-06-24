import ContentBlock from "@/components/finance/ContentBlock"
import React, { ReactElement } from "react"
import ExchangeRatesBody from "./ExchangeRatesBody"
import ExchangeRatesTitle from "./ExchangeRatesTitle"

export default function ExchangeRatesBlock(): ReactElement {
  return (
    <ContentBlock>
      <ExchangeRatesTitle />
      <ExchangeRatesBody />
    </ContentBlock>
  )
}
