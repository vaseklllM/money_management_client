import { Span16 } from "@/components/Typography"
import React, { ReactElement, useState } from "react"
import { ModalButtonCancel } from "../components"
import InputNewValue from "./InputNewValue"
import InputSum from "./InputSum"
import NameInput from "./NameInput"
import classes from "./style.module.scss"
import TypeToggle from "./TypeToggle"

export interface AddWalletActionProps {
  activeValue: number
}

export default function AddWalletAction({
  activeValue,
}: AddWalletActionProps): ReactElement {
  const getDefaultActiveValue = String(parseFloat(activeValue.toFixed(2)))

  /** Назва транзакції */
  const [name, setName] = useState("")
  /** Тип операції: */
  const [transactionType, setTransactionType] = useState(true)
  /** Сумма покупки */
  const [buySaleValue, setBuySaleValue] = useState("")
  /** Нове значення рахунку */
  const [newValue, setNewValue] = useState(getDefaultActiveValue)

  return (
    <div className={classes.body}>
      <Span16 className={classes.title}>Добавити транзакцію</Span16>
      <NameInput name={name} setName={setName} />
      <TypeToggle
        transactionType={transactionType}
        setTransactionType={setTransactionType}
        activeValue={activeValue}
        buySaleValue={buySaleValue}
        setNewValue={setNewValue}
      />
      <InputSum
        transactionType={transactionType}
        buySaleValue={buySaleValue}
        setBuySaleValue={setBuySaleValue}
        setNewValue={setNewValue}
        activeValue={activeValue}
      />
      <InputNewValue
        newValue={newValue}
        setNewValue={setNewValue}
        setBuySaleValue={setBuySaleValue}
        activeValue={activeValue}
        setTransactionType={setTransactionType}
      />
      <div className={classes.buttons}>
        <ModalButtonCancel />
      </div>
    </div>
  )
}
