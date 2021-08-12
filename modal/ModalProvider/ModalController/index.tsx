import React, { ReactElement } from "react"
import { enumModal, modalsList } from "../modalsList"

interface Props {
  modals: enumModal[]
}

export default function ModalController({ modals }: Props): ReactElement {
  const activeModal = modals[0]

  const Modal = modalsList[activeModal]

  if (!Modal) return null

  return <Modal />
}
