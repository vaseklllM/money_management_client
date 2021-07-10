import { txt } from "@/utils"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  className?: string
  color?: "white" | "blue"
}

export default function CircleLoader({
  className,
  color = "white",
}: Props): ReactElement {
  return (
    <div className={txt.join([className, classes.loader, classes[`color_${color}`]])} />
  )
}
