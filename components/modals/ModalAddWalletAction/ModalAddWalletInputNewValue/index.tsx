import { txt } from "@/utils"
import { Input, Typography } from "antd"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  setNewValue: (value: string) => any
  newValue: string
  setBuySaleValue: (value: string) => any
  activeValue: number
  setTransactionType: (v: boolean) => any
}

export default function ModalAddWalletInputNewValue({
  newValue,
  setNewValue,
  setBuySaleValue,
  activeValue,
  setTransactionType,
}: Props): ReactElement {
  const { Text } = Typography

  function onChange(event) {
    const value = txt.parseInputFloat(event.target.value, { fixedNumbers: 2 })

    const newBuySaleValue = +value - activeValue || 0

    /** нове значення "Типу операції" */
    setTransactionType(newBuySaleValue > 0)

    /** Нове значення "Сумма продажи" */
    setBuySaleValue(String(Math.abs(newBuySaleValue)))

    /** Нове значення "Нове значення рахунку" */
    setNewValue(value)
  }

  return (
    <div className={classes.body}>
      <Text>Нове значення рахунку</Text>
      <Input className={classes.input} value={newValue} onChange={onChange} />
    </div>
  )
}
