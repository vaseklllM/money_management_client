import { enumModal, ModalContext, ModalDataContext, modalsDataInterfaces } from "@/modal"
import { useContext } from "react"

export default function useModal() {
  const setModals = useContext(ModalContext)
  const setModalsData = useContext(ModalDataContext)

  function open<M extends enumModal, D extends modalsDataInterfaces[M]>(
    modal: M,
    data?: D
  ) {
    if (!(modal in enumModal)) return undefined
    /** Добавление модального окна к списку modals */
    setModals((modals: enumModal[]) => Array.from(new Set([modal, ...modals])))

    /** установка даты */
    if (data !== undefined && data !== null) {
      setModalsData((modalsData) => ({ ...modalsData, [modal]: data }))
    }
  }

  function close() {
    setModals((modals: enumModal[]) => modals.filter((i, idx) => idx > 0))
  }

  return {
    open,
    close,
  }
}
