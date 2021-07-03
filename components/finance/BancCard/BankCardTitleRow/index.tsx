import { H4 } from "@/components/Typography"
import React, { ReactElement } from "react"
import OpenIconButton from "./OpenIconButton"
import classes from "./style.module.scss"

interface Props {
  open: boolean
  title: string
  changeOpen: (v: boolean) => any
}

export default function BankCardTitleRow({
  open,
  title,
  changeOpen,
}: Props): ReactElement {
  return (
    <div className={classes.body}>
      <H4>{title}</H4>
      <OpenIconButton changeOpen={changeOpen} open={open} />
    </div>
  )
}
