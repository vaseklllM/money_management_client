import { H4 } from "@/components/Typography"
import React, { ReactElement } from "react"
import BancCardButtonAdd from "../BancCardButtonAdd"
import BancCardIconIsNotValid from "../BancCardIconIsNotValid"
import classes from "./style.module.scss"

interface Props {
  open: boolean
  title: string
  changeOpen: (v: boolean) => any
  added: boolean
  onDelete: Function
  isValid: boolean
}

export default function BankCardTitleRow(props: Props): ReactElement {
  const { title, isValid, ...btnProps } = props

  return (
    <div className={classes.body}>
      <H4>{title}</H4>
      <BancCardButtonAdd className={classes.icon} {...btnProps} />
      {typeof isValid === "boolean" && !isValid && (
        <BancCardIconIsNotValid className={classes.is_valid} />
      )}
    </div>
  )
}
