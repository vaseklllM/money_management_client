import React, { ReactElement } from "react"
import { enumModal, modalsList } from "../../modalsList"
import ModalWrapper from "./ModalWrapper"
import classes from "./style.module.scss"
import { SwitchTransition, CSSTransition } from "react-transition-group"
import ModalContentWrapper from "./ModalContentWrapper"

interface Props {
  activeModal: enumModal
  activeModalData: any
}

export default function ModalController({
  activeModal,
  activeModalData,
}: Props): ReactElement {
  const Modal = modalsList[activeModal]

  // console.log(activeModal, activeModalData)

  return (
    <ModalWrapper>
      <SwitchTransition mode='out-in'>
        <CSSTransition
          key={activeModal}
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false)
          }}
          classNames={{
            enter: classes.animation_enter,
            enterActive: classes.animation_enter_active,
            exit: classes.animation_exit,
            exitActive: classes.animation_exit_active,
          }}
          unmountOnExit
        >
          <>
            {activeModal in modalsList && (
              <ModalContentWrapper>
                <Modal {...activeModalData} />
              </ModalContentWrapper>
            )}
          </>
        </CSSTransition>
      </SwitchTransition>
    </ModalWrapper>
  )
}
