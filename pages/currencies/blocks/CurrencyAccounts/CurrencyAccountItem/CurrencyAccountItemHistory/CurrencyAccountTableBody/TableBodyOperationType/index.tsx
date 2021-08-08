import { Span14 } from "@/components/Typography"
import { Tag } from "antd"
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

  let color = value > 0 ? "green" : "volcano"
  const tag = value > 0 ? "Покупка" : "Продажа"

  return (
    <div className={className}>
      <Tag color={color} key={tag}>
        {tag}
      </Tag>
    </div>
  )
}
