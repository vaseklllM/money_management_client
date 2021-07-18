import { Typography } from "antd"
import React, { ReactElement } from "react"

interface Props {
  name: string
  className?: string
}

export default function CurrencyAccountItemName({
  name,
  className,
}: Props): ReactElement {
  const { Text } = Typography

  return (
    <Text className={className} strong>
      {name}
    </Text>
  )
}
