import React, { ReactElement } from "react"
import { ReactSVG } from "react-svg"
import classes from "./style.module.scss"

interface Props {
  children: any
}

export default function ModalWrapper({ children }: Props): ReactElement {
  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <button className={classes.close_button}>
          <ReactSVG className={classes.close_icon} src='icons/close_1.svg' />
        </button>
        {children}
      </div>
    </div>
  )
}
