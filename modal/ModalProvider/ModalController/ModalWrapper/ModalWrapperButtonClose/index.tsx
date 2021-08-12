import { txt } from "@/utils"
import React, { ReactElement } from "react"
import { ReactSVG } from "react-svg"
import classes from "./style.module.scss"

interface Props {
  className?: string
}

export default function ModalWrapperButtonClose({ className }: Props): ReactElement {
  return (
    <button className={txt.join([className, classes.button])}>
      <ReactSVG className={classes.close_icon} src='icons/close_1.svg' />
    </button>
  )
}
