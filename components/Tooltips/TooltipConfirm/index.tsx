import { ButtonBlue, ButtonOutline } from "@/components/Buttons"
import { txt } from "@/utils"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"
import TooltipConfirmIcon from "./TooltipConfirmIcon"

export enum tooltipConfirmIconTypes {
  question,
}

interface Props {
  children?: any
  title?: string
  visible: boolean
  iconType?: tooltipConfirmIconTypes
  cancelText?: string
  okText?: string
}

export default function TooltipConfirm({
  children,
  title,
  visible = false,
  iconType,
  cancelText = "no",
  okText = "ok",
}: Props): ReactElement {
  return (
    <div className={txt.join([classes.body, visible && classes.active])}>
      <div className={classes.tooltip}>
        <div className={classes.text_row}>
          <TooltipConfirmIcon iconType={iconType} />
          &nbsp;
          {typeof title === "string" ? <p className={classes.title}>{title}</p> : title}
        </div>
        <div className={classes.buttons}>
          <ButtonOutline className={classes.button}>{cancelText}</ButtonOutline>
          <ButtonBlue className={classes.button}>{okText}</ButtonBlue>
        </div>
      </div>
      {children}
    </div>
  )
}
