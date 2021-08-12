import React, { ReactElement } from "react"
import { enumModal, modalsList } from "../modalsList"
import ModalWrapper from "./ModalWrapper"

interface Props {
  modals: enumModal[]
}

export default function ModalController({ modals }: Props): ReactElement {
  const activeModal = modals[0]

  const Modal = modalsList[activeModal]

  if (!Modal) return null

  return (
    <ModalWrapper>
      <Modal />
    </ModalWrapper>
  )
}
