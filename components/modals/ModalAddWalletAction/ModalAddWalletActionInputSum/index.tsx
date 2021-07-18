import { Input } from "@/components/Inputs"
import { Span14 } from "@/components/Typography"
import { txt } from "@/utils"
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
  function onChange(event) {
    const value = txt.parseInputFloat(event.target.value, {
      fixedNumbers: 2,
      notMinus: true,
    })

    const valueNum = +value

    /** Нове значення "Сумма продажи" */
    setBuySaleValue(value)

    const newValue = transactionType ? valueNum + activeValue : activeValue - valueNum

    /** Нове значення "Нове значення рахунку" */
    setNewValue(String(parseFloat(newValue.toFixed(2))))
  }

  return (
    <div className={classes.body}>
      <Span14>Сума {transactionType ? "покупки" : "продажи"} </Span14>
      <Input
        placeholder='Сума'
        className={classes.input}
        value={buySaleValue}
        onChange={onChange}
      />
    </div>
  )
}
