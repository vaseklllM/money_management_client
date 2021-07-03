import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  children?: any
}

export default function BankCardBody({ children }: Props): ReactElement {
  return <div className={classes.body}>{children}</div>
}
