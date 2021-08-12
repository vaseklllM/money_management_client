import { ButtonBlue } from "@/components/Buttons"
import { useModal } from "@/hooks"
import { enumModal } from "@/modal/ModalProvider/modalsList"
import React, { ReactElement } from "react"

export interface creatingNewCurrencyAccountProps {
  text: string
  id: number
}

export default function CreatingNewCurrencyAccount(
  props: creatingNewCurrencyAccountProps
): ReactElement {
  const modal = useModal()

  console.log("update")

  return (
    <div>
      text: {props.text}, id: {props.id}
      <br />
      <br />
      <ButtonBlue onClick={() => modal.open(enumModal.editCurrencyAccount, { id: 2 })}>
        open modal 2
      </ButtonBlue>
    </div>
  )
}
