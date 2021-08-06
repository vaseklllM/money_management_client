import React, { ReactElement } from "react"

interface Props {
  onClick?: () => void
}

export default function SelectHeader({ onClick }: Props): ReactElement {
  return <div onClick={onClick}>SelectHeader</div>
}
