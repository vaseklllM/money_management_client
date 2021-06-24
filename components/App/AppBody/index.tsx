import React, { ReactElement } from "react"
import BriefcaseMonobankBlock from "./BriefcaseMonobankBlock"
import BriefcaseCurrencyAccountsBlock from "./BriefcaseCurrencyAccountsBlock"

import BriefcaseAllBalance from "./BriefcaseAllBalance"
import BriefcaseRatioBlock from "./BriefcaseRatioBlock"
import ExchangeRatesBlock from "./ExchangeRatesBlock"

export default function AppBody(): ReactElement {
  return (
    <>
      <BriefcaseAllBalance />
      <BriefcaseRatioBlock />
      <BriefcaseMonobankBlock />
      <BriefcaseCurrencyAccountsBlock />
      <ExchangeRatesBlock />
    </>
  )
}
