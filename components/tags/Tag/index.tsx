import { Span12 } from "@/components/Typography"
import { txt } from "@/utils"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

export enum eTagColors {
  green = "green",
  volcano = "volcano",
}

interface Props {
  className?: string
  text?: string
  color?: eTagColors
}

export default function Tag({
  text,
  className,
  color = eTagColors.green,
}: Props): ReactElement {
  return (
    <Span12 className={txt.join([className, classes.body, classes[`color_${color}`]])}>
      {text}
    </Span12>
  )
}
