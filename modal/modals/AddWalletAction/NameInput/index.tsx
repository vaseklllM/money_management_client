import { Input } from "@/components/Inputs"
import { Span14 } from "@/components/Typography"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  name: string
  setName: (v: string) => any
}

export default function NameInput({ name, setName }: Props): ReactElement {
  return (
    <div className={classes.body}>
      <Span14>Назва транзакції</Span14>
      <Input
        placeholder='Назва'
        value={name}
        onChange={(event) => setName(event.target.value)}
        className={classes.input}
      />
    </div>
  )
}
