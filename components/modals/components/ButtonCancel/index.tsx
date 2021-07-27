import { ButtonOutline } from "@/components/Buttons"
import React, { MouseEventHandler, ReactElement } from "react"

interface Props {
  onCancel: MouseEventHandler<HTMLElement>
}

export default function ButtonCancel(props: Props): ReactElement {
  const { onCancel } = props
  return <ButtonOutline onClick={onCancel}>Закрити</ButtonOutline>
}
