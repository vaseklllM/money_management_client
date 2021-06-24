import ContentBlock from "@/components/finance/ContentBlock"
import React, { ReactElement } from "react"
import useCurrencyRatioData from "./useCurrencyRatioData"
import dynamic from "next/dynamic"

const Ratio = dynamic(() => import("./CurrencyRatio"), { ssr: false })

export default function BriefcaseRatioBlock(): ReactElement {
  const { data: currencyRatioData, loading } = useCurrencyRatioData()

  if (loading || currencyRatioData.length < 2) return null

  return (
    <ContentBlock>
      <Ratio data={currencyRatioData} />
    </ContentBlock>
  )
}
