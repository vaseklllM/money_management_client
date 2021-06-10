import { txt } from "@/utils"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  children?: string
  className?: string
}

export default function AuthPageH1(props: Props): ReactElement {
  const { children, className } = props
  return <h1 className={txt.join([classes.h1, className])}>{children}</h1>
}
