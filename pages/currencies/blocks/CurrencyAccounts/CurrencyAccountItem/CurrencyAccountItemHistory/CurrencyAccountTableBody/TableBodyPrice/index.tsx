import { Span14 } from "@/components/Typography"
import React, { ReactElement } from "react"

interface Props {
  value: number
  currencyCode: string
  className?: string
}

export default function TableBodyPrice({
  value,
  currencyCode,
  className,
}: Props): ReactElement {
  const numberFormat = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: currencyCode,
  })
  const num = numberFormat.format(value)

  return <Span14 className={className}>{num}</Span14>
}
