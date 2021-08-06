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
    <div className={classes.body} onClick={onClick}>
      <Span14 className={classes.name}>{activeEl.name}</Span14>
      <ReactSVG
        className={txt.join([classes.arrow_icon, open && classes.arrow_icon_open])}
        src='icons/arrow.svg'
      />
    </div>
  )
}
