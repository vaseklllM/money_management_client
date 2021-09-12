import { Span14 } from "@/components/Typography"
import React, { ReactElement } from "react"
import { WalletNameInput } from "../../components"
import classes from "./style.module.scss"

interface Props {
  name: string
  setName: (name: string) => any
}

export default function CreatingNewWalletNameInput(props: Props): ReactElement {
  const { name, setName } = props

  return (
    <div className={classes.body}>
      <Span14>Назва рахунку</Span14>
      <WalletNameInput name={name} setName={setName} />
    </div>
  )
}
