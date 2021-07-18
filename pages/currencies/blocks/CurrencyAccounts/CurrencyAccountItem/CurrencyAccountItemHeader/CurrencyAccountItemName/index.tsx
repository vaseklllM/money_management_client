import { Span14bold } from "@/components/Typography"
import React, { ReactElement } from "react"

interface Props {
  name: string
  className?: string
}

export default function CurrencyAccountItemName({
  name,
  className,
}: Props): ReactElement {
  return <Span14bold className={className}>{name}</Span14bold>
}
