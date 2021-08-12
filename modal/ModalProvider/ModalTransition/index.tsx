import React, { ReactElement, useEffect } from "react"
import { useStateIfMounted } from "use-state-if-mounted"
import ModalController from "./ModalController"
import { enumModal } from "../modalsList"
import classes from "./style.module.scss"
import { CSSTransition } from "react-transition-group"

interface Props {
  modals: enumModal[]
  modalsData: any
  setModalsData: (obj: any) => void
}

export default function ModalTransition({
  modals,
  modalsData,
  setModalsData,
}: Props): ReactElement {
  const [activeModal, setActiveModal] = useStateIfMounted(undefined)

  useEffect(() => {
    if (modals[0] in enumModal) setActiveModal(modals[0])
  }, [modals[0]])

  function onExited() {
    setActiveModal(undefined)
    setModalsData({})
  }

  return (
    <CSSTransition
      in={modals[0] in enumModal}
      timeout={300}
      unmountOnExit
      classNames={{
        enter: classes.animation_enter,
        enterActive: classes.animation_enter_active,
        exit: classes.animation_exit,
        exitActive: classes.animation_exit_active,
      }}
      onExited={onExited}
    >
      <ModalController
        activeModal={activeModal}
        activeModalData={modalsData[activeModal] || {}}
      />
    </CSSTransition>
  )
}
