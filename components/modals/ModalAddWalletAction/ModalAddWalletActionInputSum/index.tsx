import { txt } from "@/utils"
import { Input, Typography } from "antd"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  transactionType: boolean
  setBuySaleValue: (value: string) => any
  buySaleValue: string
  setNewValue: (value: string) => any
  activeValue: number
}

export default function ModalAddWalletActionInputSum({
  transactionType,
  buySaleValue,
  setBuySaleValue,
  setNewValue,
  activeValue,
}: Props): ReactElement {
  const { Text } = Typography

  function onChange(event) {
    const value = txt.parseInputFloat(event.target.value, {
      fixedNumbers: 2,
      notMinus: true,
    })

    const valueNum = +value

    /** Нове значення "Сумма продажи" */
    setBuySaleValue(value)

    /** Нове значення "Нове значення рахунку" */
    setNewValue(
      transactionType ? String(valueNum + activeValue) : String(activeValue - valueNum)
    )
  }

  return (
    <div className={classes.body}>
      <Text>Сума {transactionType ? "покупки" : "продажи"} </Text>
      <Input
        placeholder='Сума'
        className={classes.input}
        value={buySaleValue}
        onChange={onChange}
      />
    </div>
  )
}
