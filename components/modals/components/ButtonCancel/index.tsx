import { Button } from "antd"
import React, { MouseEventHandler, ReactElement } from "react"

interface Props {
  onCancel: MouseEventHandler<HTMLElement>
}

export default function ButtonCancel(props: Props): ReactElement {
  const { onCancel } = props
  return <Button onClick={onCancel}>Закрити</Button>
}
