import classes from "./style.module.scss"
import React, { ReactElement } from "react"
import { IBankCardsMonobankData } from "../../interfaces"
import BankCardsMonobankTable from "./BankCardsMonobankTable"
import { H5, P14, Span14 } from "@/components/Typography"

interface Props {
  data?: IBankCardsMonobankData
}

export default function BankCardsMonobank(props: Props): ReactElement {
  const { data } = props

  if (!data) return null

  return (
    <div className={classes.body}>
      <H5 className={classes.title}>Монобанк</H5>
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
