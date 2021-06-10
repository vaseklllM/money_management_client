import React, { ReactElement, useState } from "react"
import classes from "./style.module.scss"
import { ReactSVG } from "react-svg"
import walletIcon from "./money-bag.svg"
import { ModalAddNewWallet } from "@/components/modals"

interface Props {
  onClose: Function
}

/** кнопка створити новий рахунок  */
export default function ButtonCircleAddNewWallet(props: Props): ReactElement {
  const { onClose } = props
  const [isModalVisible, setIsModalVisible] = useState(false)

  function cancel() {
    setIsModalVisible(false)
  }

  function onOpenModal() {
    setIsModalVisible(true)
    onClose()
  }

  return (
    <>
      <div className={classes.btn} onClick={onOpenModal}>
        <ReactSVG src={walletIcon} className={classes.icon} />
      </div>
      <ModalAddNewWallet onCancel={cancel} visible={isModalVisible} />
    </>
  )
}
