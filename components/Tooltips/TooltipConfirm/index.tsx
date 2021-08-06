import { ButtonBlue, ButtonBlueProps, ButtonOutline } from "@/components/Buttons"
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
  onCancel: () => any
  onConfirm: () => any
  okButtonProps?: ButtonBlueProps
}

export default function TooltipConfirm({
  children,
  title,
  visible = false,
  iconType,
  cancelText = "no",
  okText = "ok",
  onCancel,
  onConfirm,
  okButtonProps,
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
          <ButtonOutline className={classes.button} onClick={onCancel}>
            {cancelText}
          </ButtonOutline>
          <ButtonBlue className={classes.button} onClick={onConfirm} {...okButtonProps}>
            {okText}
          </ButtonBlue>
        </div>
      </div>
      {children}
    </div>
  )
}
