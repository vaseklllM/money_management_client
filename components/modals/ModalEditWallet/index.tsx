import { Modal } from "antd"
import React, { ReactElement, useState } from "react"
import { WalletNameInput, ButtonCancel } from "../components"
import ModalEditWalletButtonSave from "./ModalEditWalletButtonSave"
import ModalEditWalletCurrencySelect from "./ModalEditWalletCurrencySelect"

interface Props {
  visible: boolean
  onCancel: () => any
  id: string
  name: string
  currencyId: string
}

export default function ModalEditWallet(props: Props): ReactElement {
  const { visible, onCancel, id } = props
  const [name, setName] = useState(props.name)
  const [currencyId, setCurrencyId] = useState(props.currencyId)

  function close() {
    onCancel()
    setName(props.name)
    setCurrencyId(props.currencyId)
  }

  return (
    <Modal
      title='Редагування рахунку'
      visible={visible}
      onCancel={close}
      footer={[
        <ButtonCancel key='close' onCancel={close} />,
        <ModalEditWalletButtonSave
          key='save'
          value={{
            name,
            defaultName: props.name,
            currencyId,
            defaultCurrencyId: props.currencyId,
          }}
          onSave={onCancel}
          id={id}
        />,
      ]}
    >
      <WalletNameInput name={name} setName={setName} />
      <ModalEditWalletCurrencySelect
        currencyId={currencyId}
        setCurrencyId={setCurrencyId}
      />
    </Modal>
  )
}
