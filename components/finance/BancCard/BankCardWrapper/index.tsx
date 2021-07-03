import { txt } from "@/utils"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  children?: any
  className?: string
}

export default function BankCardWrapper({ children, className }: Props): ReactElement {
  return <div className={txt.join([classes.body, className])}>{children}</div>
}
