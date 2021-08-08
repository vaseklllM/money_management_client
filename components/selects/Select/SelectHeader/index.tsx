import { Span14 } from "@/components/Typography"
import { txt } from "@/utils"
import React, { ReactElement } from "react"
import { ReactSVG } from "react-svg"
import { ISelectDataItem } from ".."
import classes from "./style.module.scss"

interface Props {
  onClick: () => void
  open: boolean
  activeEl: ISelectDataItem
}

export default function SelectHeader({ onClick, open, activeEl }: Props): ReactElement {
  return (
    <div className={txt.join([classes.body, open && classes.open])} onClick={onClick}>
      <Span14 className={classes.name}>{activeEl.name}</Span14>
      <ReactSVG className={classes.arrow_icon} src='icons/arrow.svg' />
    </div>
  )
}
