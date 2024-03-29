import { ButtonBlue } from "@/components/Buttons"
import { MainWrapper } from "@/components/Wrappers"
import { useModal } from "@/hooks"
import { enumModal } from "@/modal"
import Link from "next/link"
import React, { ReactElement } from "react"

interface Props {}

export default function Promotions({}: Props): ReactElement {
  const modal = useModal()

  function onClick() {
    modal.open(enumModal.creatingNewCurrencyAccount, { text: "opened modal №1", id: 45 })
  }

  function onClick2() {
    modal.open(enumModal.editCurrencyAccount, { id: 1 })
  }

  // console.log("update")

  return (
    <MainWrapper>
      <Link href='/post'>
        <a>post</a>
      </Link>
      <br />
      <br />
      <ButtonBlue onClick={onClick}>open modal: creatingNewCurrencyAccount</ButtonBlue>
      <br />
      <br />
      <ButtonBlue onClick={onClick2}>open modal: editCurrencyAccount</ButtonBlue>
    </MainWrapper>
  )
}
