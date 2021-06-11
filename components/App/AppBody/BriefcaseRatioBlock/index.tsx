import FinanceContentBlock from "@/components/finance/FinanceContentBlock"
import React, { ReactElement } from "react"
import CurrencyRatio from "./CurrencyRatio"
import useCurrencyRatioData from "./useCurrencyRatioData"

interface Props {}

export default function BriefcaseRatioBlock({}: Props): ReactElement {
  const { data: currencyRatioData, loading } = useCurrencyRatioData()

  if (loading || currencyRatioData.length < 2) return null

  return (
    <FinanceContentBlock>
      <CurrencyRatio data={currencyRatioData} />
    </FinanceContentBlock>
  )
}
