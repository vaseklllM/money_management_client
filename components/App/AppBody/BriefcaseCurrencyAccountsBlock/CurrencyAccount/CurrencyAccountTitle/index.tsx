import { P14, Span14 } from "@/components/Typography"
import React, { ReactElement } from "react"
import { ICurrencyAccountsDataCurrency } from "../../interfaces"
import classes from "./style.module.scss"

interface Props {
  name: string
  currency: ICurrencyAccountsDataCurrency
}

export default function CurrencyAccountTitle({ name, currency }: Props): ReactElement {
  return (
    <div className={classes.body}>
      <P14 className={classes.name}>
        Назва: <Span14>{name}</Span14>
      </P14>
      <P14 className={classes.currency}>
        Валюта: <Span14>{currency.code}</Span14>
      </P14>
    </div>
  )
}
