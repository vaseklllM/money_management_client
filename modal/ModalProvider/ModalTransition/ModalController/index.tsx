import React, { ReactElement } from "react"
import { enumModal, modalsList } from "../../modalsList"
import ModalWrapper from "./ModalWrapper"

interface Props {
  activeModal: enumModal
  activeModalData: any
}

export default function ModalController({
  activeModal,
  activeModalData,
}: Props): ReactElement {
  const Modal = modalsList[activeModal]

  return (
    <ModalWrapper>
      {activeModal in modalsList && <Modal {...activeModalData} />}
    </ModalWrapper>
  )
}
