import { useModal } from "@/hooks"
import { txt } from "@/utils"
import React, { ReactElement } from "react"
import { ReactSVG } from "react-svg"
import classes from "./style.module.scss"

interface Props {
  className?: string
}

export default function ModalWrapperButtonClose({ className }: Props): ReactElement {
  const modal = useModal()

  return (
    <button className={txt.join([className, classes.button])} onClick={modal.close}>
      <ReactSVG className={classes.close_icon} src='icons/close_1.svg' />
    </button>
  )
}
