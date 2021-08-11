import { ButtonBlue } from "@/components/Buttons"
import { MainWrapper } from "@/components/Wrappers"
import Link from "next/link"
import React, { ReactElement } from "react"

interface Props {}

export default function Promotions({}: Props): ReactElement {
  return (
    <MainWrapper>
      <Link href='/post'>
        <a>post</a>
      </Link>
      <br />
      <ButtonBlue>open modal</ButtonBlue>
    </MainWrapper>
  )
}
