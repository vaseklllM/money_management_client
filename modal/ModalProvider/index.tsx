import React, { createContext, ReactElement, useState } from "react"
import ModalController from "./ModalController"
import { enumModal } from "./modalsList"
import { CSSTransition } from "react-transition-group"
import classes from "./style.module.scss"

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
        <CSSTransition
          in={typeof modals[0] === "number"}
          timeout={300}
          unmountOnExit
          classNames={{
            enter: classes.animation_enter,
            enterActive: classes.animation_enter_active,
            exit: classes.animation_exit,
            exitActive: classes.animation_exit_active,
          }}
          // onEnter={() => setShowButton(false)}
          onExited={() => console.log("onExited")}
        >
          <ModalController
            activeModal={modals[0]}
            activeModalData={modalsData[modals[0]] || {}}
          />
        </CSSTransition>
        {children}
      </ModalDataContext.Provider>
    </ModalContext.Provider>
  )
}
