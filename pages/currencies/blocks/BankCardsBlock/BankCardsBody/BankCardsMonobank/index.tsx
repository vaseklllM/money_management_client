import classes from "./style.module.scss"
import React, { ReactElement } from "react"
import { IBankCardsMonobankData } from "../../interfaces"
import BankCardsMonobankTable from "./BankCardsMonobankTable"
import { P14, Span14, Span16 } from "@/components/Typography"

interface Props {
  data?: IBankCardsMonobankData
}

export default function BankCardsMonobank(props: Props): ReactElement {
  const { data } = props

  if (!data) return null

  return (
    <div className={classes.body}>
      <Span16>Монобанк</Span16>
      <P14>
        Власник:&nbsp;&nbsp;
        <Span14>
          {data.user.lastName} {data.user.firstName}
        </Span14>
      </P14>
      <BankCardsMonobankTable data={data.historyCards[0].cards} />
    </div>
  )
}
