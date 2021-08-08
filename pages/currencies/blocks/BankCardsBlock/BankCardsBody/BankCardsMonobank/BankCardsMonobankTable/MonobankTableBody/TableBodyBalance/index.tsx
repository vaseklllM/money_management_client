import { Span14 } from "@/components/Typography"
import { txt } from "@/utils"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  className?: string
  balance: number
  currencyCode: string
}

export default function TableBodyBalance({
  className,
  balance,
  currencyCode,
}: Props): ReactElement {
  const numberFormat = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: currencyCode,
    currencyDisplay: "narrowSymbol",
  })

  const num = numberFormat.format(balance)

  const color: string = (() => {
    if (balance === 0) return
    return balance > 0 ? classes.green : classes.red
  })()

  return <Span14 className={txt.join([className, color])}>{num}</Span14>
}
