import { SwitchBadGood } from "@/components/switches"
import { Typography } from "antd"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  transactionType: boolean
  setTransactionType: (v: boolean) => any
  activeValue: number
  buySaleValue: string
  setNewValue: (v: string) => any
}

export default function ModalAddWalletActionTypeToggle({
  setTransactionType,
  transactionType,
  activeValue,
  buySaleValue,
  setNewValue,
}: Props): ReactElement {
  const { Text } = Typography

  function onChange(value) {
    setTransactionType(value)

    const buySaleValueNum = +buySaleValue

    const newValue: number = value
      ? activeValue + buySaleValueNum
      : activeValue - buySaleValueNum

    /** Нове значення "Нове значення рахунку" */
    setNewValue(String(parseFloat(newValue.toFixed(2))))
  }

  return (
    <div className={classes.switch_row}>
      <Text>Тип операції:</Text>
      <SwitchBadGood
        className={classes.switch}
        badText='Продажа'
        goodText='Покупка'
        value={transactionType}
        onChange={onChange}
      />
    </div>
  )
}
