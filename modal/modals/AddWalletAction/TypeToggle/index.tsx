import { SwitchBadGood } from "@/components/switches"
import { Span14 } from "@/components/Typography"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  transactionType: boolean
  setTransactionType: (v: boolean) => any
  activeValue: number
  buySaleValue: string
  setNewValue: (v: string) => any
}

export default function TypeToggle({
  setTransactionType,
  transactionType,
  activeValue,
  buySaleValue,
  setNewValue,
}: Props): ReactElement {
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
      <Span14>Тип операції:</Span14>
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
