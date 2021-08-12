import { enumModal, ModalContext, ModalDataContext } from "@/modal"
import { creatingNewCurrencyAccountProps } from "@/modal/modals/CreatingNewCurrencyAccount"
import { useContext } from "react"

interface modalDataInterfaces {
  [enumModal.creatingNewCurrencyAccount]: creatingNewCurrencyAccountProps
  [enumModal.editCurrencyAccount]: undefined
}

export default function useModal() {
  const setModals = useContext(ModalContext)
  const setModalsData = useContext(ModalDataContext)

  function open<M extends enumModal, D extends modalDataInterfaces[M]>(
    modal: M,
    data?: D
  ) {
    setModals((modals: enumModal[]) => Array.from(new Set([modal, ...modals])))

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
