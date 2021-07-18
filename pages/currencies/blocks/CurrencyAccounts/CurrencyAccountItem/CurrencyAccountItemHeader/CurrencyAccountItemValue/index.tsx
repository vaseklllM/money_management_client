import { Span14 } from "@/components/Typography"
import { txt } from "@/utils"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  value: number
  currencyCode: string
  className?: string
}

export default function CurrencyAccountItemValue({
  currencyCode,
  value,
  className,
}: Props): ReactElement {
  const numberFormat = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: currencyCode,
    currencyDisplay: "narrowSymbol",
  })

  return (
    <Span14 className={txt.join([className, value > 0 ? classes.green : classes.red])}>
      {numberFormat.format(value)}
    </Span14>
  )
}
