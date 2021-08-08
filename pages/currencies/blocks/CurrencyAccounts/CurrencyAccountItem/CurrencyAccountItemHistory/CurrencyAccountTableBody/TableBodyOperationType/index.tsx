import { eTagColors, Tag } from "@/components/tags"
import { Span14 } from "@/components/Typography"
import React, { ReactElement } from "react"

interface Props {
  className?: string
  value: number
}

export default function TableBodyOperationType({
  className,
  value,
}: Props): ReactElement {
  if (value === 0) return <Span14 className={className}>-</Span14>

  return (
    <div className={className}>
      <Tag
        color={value > 0 ? eTagColors.green : eTagColors.volcano}
        text={value > 0 ? "Покупка" : "Продажа"}
      />
    </div>
  )
}
