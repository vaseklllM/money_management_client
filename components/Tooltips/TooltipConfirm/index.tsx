import { ButtonBlue, ButtonBlueProps, ButtonOutline } from "@/components/Buttons"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"
import TooltipConfirmIcon from "./TooltipConfirmIcon"
import { CSSTransition } from "react-transition-group"

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
    <div className={classes.body}>
      <CSSTransition
        in={visible}
        timeout={200}
        unmountOnExit
        className={classes.tooltip}
        classNames={{
          enter: classes.tooltip_enter,
          enterActive: classes.tooltip_enter_active,
          exit: classes.tooltip_exit,
          exitActive: classes.tooltip_exit_active,
        }}
      >
        <div>
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
      </CSSTransition>
      {children}
    </div>
  )
}
