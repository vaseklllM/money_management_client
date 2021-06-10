import { Input, Typography } from "antd"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  name: string
  setName: (name: string) => any
}

export default function WalletNameInput(props: Props): ReactElement {
  const { name, setName } = props

  const { Text } = Typography

  return (
    <>
      <Text>Назва рахунку</Text>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={classes.input}
        placeholder='Назва'
      />
    </>
  )
}
