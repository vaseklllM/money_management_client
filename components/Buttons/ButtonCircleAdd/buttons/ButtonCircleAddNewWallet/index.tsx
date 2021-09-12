import React, { ReactElement } from "react"
import classes from "./style.module.scss"
import { ReactSVG } from "react-svg"
import walletIcon from "./money-bag.svg"
import { useModal } from "@/hooks"
import { enumModal } from "@/modal"

interface Props {
  onClose: Function
}

/** кнопка створити новий рахунок  */
export default function ButtonCircleAddNewWallet({ onClose }: Props): ReactElement {
  const modal = useModal()

  function onClick() {
    onClose()
    modal.open(enumModal.creatingNewCurrencyAccount)
  }

  return (
    <div className={classes.btn} onClick={onClick}>
      <ReactSVG src={walletIcon} className={classes.icon} />
    </div>
  )
}
