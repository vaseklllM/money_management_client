import { txt } from "@/utils"
import React, { MouseEventHandler, ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  children?: any
  onClick?: MouseEventHandler<HTMLElement>
  className?: string
}

export default function ButtonOutline({
  children,
  onClick,
  className,
}: Props): ReactElement {
  return (
    <button className={txt.join([classes.button, className])} onClick={onClick}>
      {children}
    </button>
  )
}
