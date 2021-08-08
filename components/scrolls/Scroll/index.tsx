import { txt } from "@/utils"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  children?: any
  className?: string
}

export default function Scroll({ children, className }: Props): ReactElement {
  return <div className={txt.join([className, classes.scroll])}>{children}</div>
}
