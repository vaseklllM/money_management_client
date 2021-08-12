import React, { ReactElement, useEffect } from "react"
import { CSSTransition } from "react-transition-group"
import { useStateIfMounted } from "use-state-if-mounted"
import ModalController from "../ModalController"
import { enumModal } from "../modalsList"
import classes from "./style.module.scss"

interface Props {
  firstModal: enumModal
  modalsData: any
}

export default function ModalTransition({ firstModal, modalsData }: Props): ReactElement {
  const [activeModal, setActiveModal] = useStateIfMounted(undefined)

  useEffect(() => {
    if (firstModal in enumModal) setActiveModal(firstModal)
  }, [firstModal])

  return (
    <CSSTransition
      in={firstModal in enumModal}
      timeout={300}
      unmountOnExit
      classNames={{
        enter: classes.animation_enter,
        enterActive: classes.animation_enter_active,
        exit: classes.animation_exit,
        exitActive: classes.animation_exit_active,
      }}
      onExited={() => setActiveModal(undefined)}
    >
      <ModalController
        activeModal={activeModal}
        activeModalData={modalsData[activeModal] || {}}
      />
    </CSSTransition>
  )
}
