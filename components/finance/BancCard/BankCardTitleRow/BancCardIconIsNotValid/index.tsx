import React, { memo, ReactElement } from "react"
import { ReactSVG } from "react-svg"
import icon from "./warning.svg"
import classes from "./style.module.scss"
import { TooltipBlack } from "@/components/Tooltips"

interface Props {
  className?: string
}

export default memo(function BancCardIconIsNotValid({ className }: Props): ReactElement {
  return (
    <TooltipBlack className={className} title='Помилка при спробі оновити дані'>
      <ReactSVG src={icon} className={classes.icon} />
    </TooltipBlack>
  )
})
