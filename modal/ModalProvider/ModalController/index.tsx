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
  if (!(activeModal in modalsList)) return null

  const Modal = modalsList[activeModal]

  return (
    <ModalWrapper>
      <Modal {...activeModalData} />
    </ModalWrapper>
  )
}
