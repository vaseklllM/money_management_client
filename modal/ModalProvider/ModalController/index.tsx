import React, { ReactElement } from "react"
import { enumModal, modalsList } from "../modalsList"
import ModalWrapper from "./ModalWrapper"

interface Props {
  activeModal: enumModal
  activeModalData: any
}

export default function ModalController({
  activeModal,
  activeModalData,
}: Props): ReactElement {
  // if (!(activeModal in modalsList)) return null

  const Modal = modalsList[activeModal]

  const body = activeModal in modalsList ? <Modal {...activeModalData} /> : null

  return <ModalWrapper>{body}</ModalWrapper>
}
