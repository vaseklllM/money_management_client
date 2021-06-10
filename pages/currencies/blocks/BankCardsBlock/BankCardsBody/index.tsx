import React, { ReactElement } from "react"
import { IBankCardsData } from "../interfaces"
import BankCardsMonobank from "./BankCardsMonobank"

interface Props {
  data: IBankCardsData
}

export default function BankCardsBody(props: Props): ReactElement {
  const { data } = props

  return <BankCardsMonobank data={data.bankcards.monobank} />
}
