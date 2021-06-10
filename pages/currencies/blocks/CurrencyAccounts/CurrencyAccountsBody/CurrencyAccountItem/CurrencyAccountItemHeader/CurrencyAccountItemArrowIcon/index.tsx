import { txt } from "@/utils"
import React, { ReactElement } from "react"
import { ReactSVG } from "react-svg"
import arrowIcon from "./next.svg"
import classes from "./style.module.scss"

interface Props {
  className?: string
  arrowActive: boolean
}

export default function CurrencyAccountItemArrowIcon({
  className,
  arrowActive,
}: Props): ReactElement {
  return (
    <ReactSVG
      src={arrowIcon}
      className={txt.join([className, classes.icon, arrowActive && classes.active])}
    >
      CurrencyAccountItemArrowIcon
    </ReactSVG>
  )
}
