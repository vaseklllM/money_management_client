import React, { ReactElement } from "react"
import { enumModal, modalsList } from "../modalsList"
import ModalWrapper from "./ModalWrapper"

interface Props {
  modals: enumModal[]
  modalsData: any
}

export default function ModalController({ modals, modalsData }: Props): ReactElement {
  const activeModal = modals[0]
  const activeModalData = modalsData[activeModal] || {}

  const Modal = modalsList[activeModal]

  if (!Modal) return null

  return (
    <ModalWrapper>
      <Modal {...activeModalData} />
    </ModalWrapper>
  )
}
