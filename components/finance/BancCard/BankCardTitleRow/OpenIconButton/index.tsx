import React, { ReactElement } from "react"
import BancCardButtonAdd from "../../BancCardButtonAdd"

interface Props {
  open: boolean
  changeOpen: (v: boolean) => any
  className?: string
}

export default function OpenIconButton({
  open,
  changeOpen,
  className,
}: Props): ReactElement {
  return <BancCardButtonAdd className={className} isAdd={open} changeIsAdd={changeOpen} />
}
