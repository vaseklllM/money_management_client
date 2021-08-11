import React, { createContext, ReactElement, useState } from "react"

interface Props {
  children: any
}

const ModalContext = createContext(null)

export default function ModalProvider({ children }: Props): ReactElement {
  const [modals, setModals] = useState([])

  return <ModalContext.Provider value={setModals}>{children}</ModalContext.Provider>
}
