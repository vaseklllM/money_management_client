import { Modal } from "antd"
import React, { ReactElement, useEffect, useState } from "react"
import ButtonSave from "./buttons/ButtonSave"
import AddNewWalletValueInput from "./AddNewWalletValueInput"
import { useQuery } from "@apollo/client"
import { WalletNameInput, ButtonCancel } from "../components"
import classes from "./style.module.scss"
import { CURRENCIES, ICurrenciesData } from "./currencies.gql"

interface Props {
  visible: boolean
  onCancel: () => any
}

/** Створення нового рахунку */
export default function ModalAddNewWallet(props: Props): ReactElement {
  const { visible, onCancel } = props
  const { data, loading } = useQuery<ICurrenciesData>(CURRENCIES)

  const [name, setName] = useState("")
  const [value, setValue] = useState("0")
  const [activeCurrency, setActiveCurrency] = useState<string>(undefined)

  // console.log(activeCurrency)

  useEffect(() => {
    if (!loading && data) {
      setActiveCurrency(data.currencies[0].id)
    }
  }, [loading])

  function close() {
    onCancel()
    setName("")
    setValue("0")
    setActiveCurrency(data.currencies[0].id)
  }

  return (
    <Modal
      title='Створення нового рахунку'
      visible={visible}
      onCancel={close}
      footer={[
        <ButtonCancel key='close' onCancel={close} />,
        <ButtonSave
          key='save'
          onCancel={close}
          value={{ sum: parseFloat(value) || 0, currency: activeCurrency, name }}
        />,
      ]}
    >
      <WalletNameInput name={name} setName={setName} />
      {!loading && (
        <AddNewWalletValueInput
          currencies={data.currencies}
          value={value}
          setValue={setValue}
          activeCurrency={activeCurrency}
          setActiveCurrency={setActiveCurrency}
          className={classes.currency_input}
        />
      )}
    </Modal>
  )
}
