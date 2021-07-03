import { txt } from "@/utils"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  children?: any
  className?: string
  open: boolean
}

export default function BankCardWrapper({
  children,
  className,
  open,
}: Props): ReactElement {
  return (
    <div className={txt.join([classes.body, className, open && classes.open])}>
      {children}
    </div>
  )
}
