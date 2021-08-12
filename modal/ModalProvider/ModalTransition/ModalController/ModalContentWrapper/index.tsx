import { enumModal, modalsList } from "@/modal/ModalProvider/modalsList"
import React, { memo, ReactElement } from "react"
import ModalWrapperButtonClose from "./ModalWrapperButtonClose"
import classes from "./style.module.scss"

interface Props {
  activeModal: enumModal
  activeModalData: any
}

export default memo(function ModalContentWrapper({
  activeModal,
  activeModalData,
}: Props): ReactElement {
  const Modal = modalsList[activeModal]

  return (
    <div className={classes.content}>
      <ModalWrapperButtonClose className={classes.close_button} />
      <Modal {...activeModalData} />
    </div>
  )
})
