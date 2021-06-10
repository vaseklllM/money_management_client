import { configCurrencyAccounts } from "@/pages/currencies/blocks/CurrencyAccounts/config"
import { useMutation } from "@apollo/client"
import { Button } from "antd"
import React, { ReactElement } from "react"
import ADD_TRANSACTION from "./addTransactionCurrencyAccount.gql"

interface Props {
  onSave: () => any
  value: {
    sum: number
    name: string
  }
  currencyAccountId: string
  page: number
}

interface IAddTransactionDataHistoryItem {
  id: string
  title: string
  value: number
  date: Date
}

interface IAddTransactionData {
  addTransactionCurrencyAccount: {
    id: string
    value: number
    history: IAddTransactionDataHistoryItem[]
  }
}

interface IAddTransactionVariables {
  currencyAccountId: string
  value: number
  title: string
  numberOfHistoryItems?: number
  historyPage: number
}

export default function ModalAddWalletActionButtonSave({
  onSave,
  value,
  currencyAccountId,
  page,
}: Props): ReactElement {
  const [addTransaction, { loading }] =
    useMutation<IAddTransactionData, IAddTransactionVariables>(ADD_TRANSACTION)

  async function save() {
    await addTransaction({
      variables: {
        currencyAccountId,
        title: value.name !== "" ? value.name : value.sum > 0 ? "Покупка" : "Продажа",
        value: value.sum,
        numberOfHistoryItems: configCurrencyAccounts.numberOfHistoryItems,
        historyPage: page,
      },
    })
    onSave()
  }

  return (
    <Button disabled={!value.sum} type='primary' onClick={save} loading={loading}>
      Добавити
    </Button>
  )
}
