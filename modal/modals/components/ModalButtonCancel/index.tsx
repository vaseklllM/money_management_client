import { ButtonOutline } from "@/components/Buttons"
import { useModal } from "@/hooks"
import React, { ReactElement } from "react"

export default function ModalButtonCancel(): ReactElement {
  const modal = useModal()

  return <ButtonOutline onClick={() => modal.close()}>Закрити</ButtonOutline>
}
