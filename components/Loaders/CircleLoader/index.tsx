import { txt } from "@/utils"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  className?: string
}

export default function CircleLoader({ className }: Props): ReactElement {
  return <div className={txt.join([className, classes.loader])} />
}
