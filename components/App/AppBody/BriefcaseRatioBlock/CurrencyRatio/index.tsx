import React, { ReactElement } from "react"
import CurrencyRatioBody from "./CurrencyRatioBody"
import { ICurrencyRatioData } from "./interface"

interface IProps {
  data: ICurrencyRatioData[]
}

export default function CurrencyRatio({ data }: IProps): ReactElement {
  return <CurrencyRatioBody data={data} />
}
