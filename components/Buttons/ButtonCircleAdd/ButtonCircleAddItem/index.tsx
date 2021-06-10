import { txt } from "@/utils"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  children?: string | ReactElement | ReactElement[]
  className?: string
}

export default function ButtonCircleAddItem(props: Props): ReactElement {
  const { children, className } = props
  return <button className={txt.join([classes.button, className])}>{children}</button>
}
