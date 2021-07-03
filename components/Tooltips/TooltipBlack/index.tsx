import { txt } from "@/utils"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  children: ReactElement | ReactElement[]
  title: string
  className?: string
}

export default function TooltipBlack({
  children,
  title,
  className,
}: Props): ReactElement {
  return (
    <div className={txt.join([classes.body, className])}>
      <div className={classes.tooltip}>{title}</div>
      {children}
    </div>
  )
}
