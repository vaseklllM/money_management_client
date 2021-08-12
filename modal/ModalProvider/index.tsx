import React, { createContext, ReactElement, useState } from "react"
import { enumModal } from "./modalsList"
import ModalTransition from "./ModalTransition"

interface Props {
  children: any
}

export const ModalContext = createContext(null)
export const ModalDataContext = createContext(null)

export default function ModalProvider({ children }: Props): ReactElement {
  const [modals, setModals] = useState<enumModal[]>([])
  const [modalsData, setModalsData] = useState({})

  // console.log(modalsData, modals)

  return (
    <ModalContext.Provider value={setModals}>
      <ModalDataContext.Provider value={setModalsData}>
        <ModalTransition
          modals={modals}
          modalsData={modalsData}
          setModalsData={setModalsData}
        />
        {children}
      </ModalDataContext.Provider>
    </ModalContext.Provider>
  )
}
