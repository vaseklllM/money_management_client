import { Modal } from "antd"
import React, { ReactElement, useState } from "react"
import { ButtonCancel } from "../components"
import ModalAddWalletActionButtonSave from "./ModalAddWalletActionButtonSave"
import ModalAddWalletActionInputSum from "./ModalAddWalletActionInputSum"
import ModalAddWalletActionNameInput from "./ModalAddWalletActionNameInput"
import ModalAddWalletActionTypeToggle from "./ModalAddWalletActionTypeToggle"
import ModalAddWalletInputNewValue from "./ModalAddWalletInputNewValue"

interface Props {
  visible: boolean
  onCancel: () => any
  activeValue: number
  currencyAccountId: string
  page: number
}

export default function ModalAddWalletAction({
  visible,
  onCancel,
  activeValue,
  currencyAccountId,
  page,
}: Props): ReactElement {
  /** Назва транзакції */
  const [name, setName] = useState("")
  /** Тип операції: */
  const [transactionType, setTransactionType] = useState(true)
  /** Сумма покупки */
  const [buySaleValue, setBuySaleValue] = useState("")
  /** Нове значення рахунку */
  const [newValue, setNewValue] = useState(String(activeValue))

  function close() {
    setTransactionType(true)
    setBuySaleValue("")
    setNewValue(String(activeValue))
    setName("")
    onCancel()
  }

  return (
    <Modal
      title='Добавити транзакцію'
      visible={visible}
      onCancel={close}
      footer={[
        <ButtonCancel key='close' onCancel={close} />,
        <ModalAddWalletActionButtonSave
          key='save'
          onSave={() => {
            onCancel()
            setTransactionType(true)
            setName("")
            setBuySaleValue("")
          }}
          value={{
            sum: transactionType
              ? parseFloat(buySaleValue) || 0
              : parseFloat(buySaleValue) * -1 || 0,
            name,
          }}
          currencyAccountId={currencyAccountId}
          page={page}
        />,
      ]}
    >
      <ModalAddWalletActionNameInput name={name} setName={setName} />
      <ModalAddWalletActionTypeToggle
        transactionType={transactionType}
        setTransactionType={setTransactionType}
        activeValue={activeValue}
        buySaleValue={buySaleValue}
        setNewValue={setNewValue}
      />
      <ModalAddWalletActionInputSum
        transactionType={transactionType}
        buySaleValue={buySaleValue}
        setBuySaleValue={setBuySaleValue}
        setNewValue={setNewValue}
        activeValue={activeValue}
      />
      <ModalAddWalletInputNewValue
        newValue={newValue}
        setNewValue={setNewValue}
        setBuySaleValue={setBuySaleValue}
        activeValue={activeValue}
        setTransactionType={setTransactionType}
      />
    </Modal>
  )
}
