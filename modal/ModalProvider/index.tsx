import React, { createContext, ReactElement, useState } from "react"
import ModalController from "./ModalController"
import { enumModal } from "./modalsList"

interface Props {
  children: any
}

export const ModalContext = createContext(null)
export const ModalDataContext = createContext(null)

export default function ModalProvider({ children }: Props): ReactElement {
  const [modals, setModals] = useState<enumModal[]>([])
  const [modalsData, setModalsData] = useState({})

  return (
    <ModalContext.Provider value={setModals}>
      <ModalDataContext.Provider value={setModalsData}>
        <ModalController modals={modals} modalsData={modalsData} />
        {children}
      </ModalDataContext.Provider>
    </ModalContext.Provider>
  )
}
