import { Input } from "@/components/Inputs"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  name: string
  setName: (name: string) => any
}

export default function WalletNameInput(props: Props): ReactElement {
  const { name, setName } = props

  return (
    <Input
      value={name}
      onChange={(e) => setName(e.target.value)}
      className={classes.input}
      placeholder='Назва'
    />
  )
}
