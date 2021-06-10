import { ReactElement } from "react"

interface Props {
  balance?: number
  currency?: string
  className?: string
}

export default function CardCurrency(props: Props): ReactElement {
  const { balance, className, currency } = props

  const numberFormat = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: currency,
  })

  return (
    <div className={className}>
      {numberFormat.format(parseFloat((balance / 100).toFixed(2)))}
    </div>
  )
}
