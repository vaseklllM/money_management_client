import { Input } from "@/components/Inputs"
import { Span14 } from "@/components/Typography"
import { txt } from "@/utils"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  setNewValue: (value: string) => any
  newValue: string
  setBuySaleValue: (value: string) => any
  activeValue: number
  setTransactionType: (v: boolean) => any
}

export default function InputNewValue({
  newValue,
  setNewValue,
  setBuySaleValue,
  activeValue,
  setTransactionType,
}: Props): ReactElement {
  function onChange(event) {
    const value = txt.parseInputFloat(event.target.value, { fixedNumbers: 2 })

    const newBuySaleValue: number = +value - activeValue || 0

    /** нове значення "Типу операції" */
    setTransactionType(newBuySaleValue > 0)

    /** Нове значення "Сумма продажи" */
    setBuySaleValue(String(Math.abs(parseFloat(newBuySaleValue.toFixed(2)))))

    /** Нове значення "Нове значення рахунку" */
    setNewValue(value)
  }

  return (
    <div className={classes.body}>
      <Span14>Нове значення рахунку</Span14>
      <Input className={classes.input} value={newValue} onChange={onChange} />
    </div>
  )
}
