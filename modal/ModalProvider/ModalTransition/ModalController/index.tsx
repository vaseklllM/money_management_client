import React, { ReactElement } from "react"
import { enumModal } from "../../modalsList"
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
        >
          <>
            {activeModal in enumModal && (
              <ModalContentWrapper
                activeModal={activeModal}
                activeModalData={activeModalData}
              />
            )}
          </>
        </CSSTransition>
      </SwitchTransition>
    </ModalWrapper>
  )
}
