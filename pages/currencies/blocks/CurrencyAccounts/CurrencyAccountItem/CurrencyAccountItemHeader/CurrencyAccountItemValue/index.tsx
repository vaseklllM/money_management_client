import { Typography } from "antd"
import React, { ReactElement } from "react"

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
  const { Text } = Typography

  const numberFormat = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: currencyCode,
    currencyDisplay: "narrowSymbol",
  })

  return (
    <Text
      className={className}
      type={value === 0 ? "secondary" : value > 0 ? "success" : "danger"}
    >
      {numberFormat.format(value)}
    </Text>
  )
}
