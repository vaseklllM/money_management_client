import React, { ReactElement } from "react"

export interface creatingNewCurrencyAccountProps {
  text: string
  id: number
}

export default function CreatingNewCurrencyAccount(
  props: creatingNewCurrencyAccountProps
): ReactElement {
  return (
    <div>
      text: {props.text}, id: {props.id}
    </div>
  )
}
