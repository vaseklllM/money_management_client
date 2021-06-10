import { Input, Typography } from "antd"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  name: string
  setName: (v: string) => any
}

export default function ModalAddWalletActionNameInput({
  name,
  setName,
}: Props): ReactElement {
  const { Text } = Typography

  return (
    <div>
      <Text>Назва транзакції</Text>
      <Input
        placeholder='Назва'
        value={name}
        onChange={(event) => setName(event.target.value)}
        className={classes.input}
      />
    </div>
  )
}
