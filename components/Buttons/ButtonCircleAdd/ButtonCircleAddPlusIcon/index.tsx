import { txt } from "@/utils"
import React, { ReactElement } from "react"
import { ReactSVG } from "react-svg"
import classes from "./style.module.scss"

interface Props {
  className: string
}

export default function ButtonCircleAddPlusIcon({ className }: Props): ReactElement {
  return <ReactSVG src='icons/plus.svg' className={txt.join([classes.icon, className])} />
}
