import FinanceContentBlock from "@/components/finance/FinanceContentBlock"
import React, { ReactElement } from "react"
import CurrencyRatio from "./CurrencyRatio"

interface Props {}

export default function BriefcaseRatioBlock({}: Props): ReactElement {
  return (
    <FinanceContentBlock>
      <CurrencyRatio />
    </FinanceContentBlock>
  )
}
