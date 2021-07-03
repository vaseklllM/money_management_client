import { H5 } from "@/components/Typography"
import React, { ReactElement } from "react"

interface Props {
  open: boolean
  title: string
}

export default function BankCardTitleRow({ open, title }: Props): ReactElement {
  return (
    <div>
      <H5>{title}</H5>
    </div>
  )
}
