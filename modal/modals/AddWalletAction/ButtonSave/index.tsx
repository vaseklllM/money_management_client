import { ButtonBlue } from "@/components/Buttons"
import { useModal } from "@/hooks"
import { configCurrencyAccounts } from "@/pages/currencies/blocks/CurrencyAccounts/config"
import { useMutation } from "@apollo/client"
import React, { ReactElement } from "react"
import { ADD_TRANSACTION } from "./addTransactionCurrencyAccount.gql"

interface Props {
  onSave: () => {}
  value: {
    sum: number
    name: string
  }
  currencyAccountId: string
  page: number
  className?: string
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

export default function ButtonSave({
  onSave,
  value,
  currencyAccountId,
  page,
  className,
}: Props): ReactElement {
  const [addTransaction, { loading }] = useMutation<
    IAddTransactionData,
    IAddTransactionVariables
  >(ADD_TRANSACTION)

  const modal = useModal()

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
    modal.close()
  }

  return (
    <ButtonBlue className={className} disabled={!value.sum} onClick={save} loading={loading}>
      Добавити
    </ButtonBlue>
  )
}
