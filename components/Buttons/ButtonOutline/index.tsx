import React, { MouseEventHandler, ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  children?: any
  onClick?: MouseEventHandler<HTMLElement>
}

export default function ButtonOutline({ children, onClick }: Props): ReactElement {
  return (
    <button className={classes.button} onClick={onClick}>
      {children}
    </button>
  )
}
