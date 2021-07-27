import React, { ReactElement } from "react"
import { ReactSVG } from "react-svg"
import { tooltipConfirmIconTypes } from ".."
import classes from "./style.module.scss"

interface Props {
  iconType?: tooltipConfirmIconTypes
}

export default function TooltipConfirmIcon({ iconType }: Props): ReactElement {
  if (!(iconType in tooltipConfirmIconTypes)) return null

  const icons = {
    [tooltipConfirmIconTypes.question]: "icons/question.svg",
  }

  return <ReactSVG className={classes.icon} src={icons[iconType]} />
}
