import { enumModal, ModalContext } from "@/modal"
import { useContext } from "react"

export default function useModal() {
  const setModals = useContext(ModalContext)

  function open(modal: enumModal, data?: any) {
    setModals((modals: enumModal[]) => Array.from(new Set([...modals, modal])))
  }

  return {
    open,
  }
}
