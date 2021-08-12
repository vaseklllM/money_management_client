import React, { createContext, ReactElement, useState } from "react"
import ModalController from "./ModalController"
import { enumModal } from "./modalsList"

interface Props {
  children: any
}

export const ModalContext = createContext(null)

export default function ModalProvider({ children }: Props): ReactElement {
  const [modals, setModals] = useState<enumModal[]>([])

  return (
    <ModalContext.Provider value={setModals}>
      <ModalController modals={modals} />
      {children}
    </ModalContext.Provider>
  )
}
