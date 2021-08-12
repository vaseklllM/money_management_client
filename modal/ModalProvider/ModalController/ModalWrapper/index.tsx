import React, { ReactElement } from "react"
import ModalWrapperButtonClose from "./ModalWrapperButtonClose"
import classes from "./style.module.scss"

interface Props {
  children: any
}

export default function ModalWrapper({ children }: Props): ReactElement {
  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <ModalWrapperButtonClose className={classes.close_button} />
        {children}
      </div>
    </div>
  )
}
