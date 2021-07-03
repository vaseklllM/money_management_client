import React, { ReactElement } from "react"
import BancCardButtonAdd from "../../BancCardButtonAdd"

interface Props {
  open: boolean
  changeOpen: (v: boolean) => any
}

export default function OpenIconButton({ open, changeOpen }: Props): ReactElement {
  return <BancCardButtonAdd isAdd={open} changeIsAdd={changeOpen} />
}
