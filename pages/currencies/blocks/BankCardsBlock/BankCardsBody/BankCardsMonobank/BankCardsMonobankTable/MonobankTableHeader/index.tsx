import { Span14bold } from "@/components/Typography"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {}

export default function MonobankTableHeader({}: Props): ReactElement {
  return (
    <div className={classes.body}>
      <Span14bold className={classes.item}>Номер карти</Span14bold>
      <Span14bold className={classes.item}>Баланс</Span14bold>
      <Span14bold className={classes.item}>Код валюти</Span14bold>
      <Span14bold className={classes.item}>iban</Span14bold>
    </div>
  )
}
