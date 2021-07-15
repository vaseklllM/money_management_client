import { P14, Span14 } from "@/components/Typography"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  currencyCode: string
}

export default function ExchangeRatesGraphItemTitle({
  currencyCode,
}: Props): ReactElement {
  return (
    <div className={classes.body}>
      <P14 className={classes.fs_12}>
        Валюта: <Span14>{currencyCode}</Span14>
      </P14>
    </div>
  )
}
