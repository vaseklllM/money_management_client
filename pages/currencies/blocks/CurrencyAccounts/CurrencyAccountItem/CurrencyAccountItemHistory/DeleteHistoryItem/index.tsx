import React, { ReactElement } from "react"
import { useStateIfMounted } from "use-state-if-mounted"
import { IconButtonDelete } from "@/components/Buttons"
import DELETE_CURRENCY_ACCOUNT_HISTORY_ITEM from "./deleteCurrencyAccountHistoryItem.gql"
import { useMutation } from "@apollo/client"
import { ICurrencyAccountData } from "../../../../interface"
import { configCurrencyAccounts } from "../../../config"

interface Props {
  className?: string
  disabled: boolean
  id: string
  page: number
}

interface IDeleteHistoryItemVariables {
  currencyAccountHistoryId: string
  numberOfHistoryItems: number
  historyPage: number
}

interface IDeleteHistoryItemData {
  deleteCurrencyAccount: ICurrencyAccountData
}

export default function DeleteHistoryItem({
  className,
  id,
  disabled,
  page,
}: Props): ReactElement {
  const [loading, setLoading] = useStateIfMounted(false)

  const [deleteHistory] = useMutation<
    IDeleteHistoryItemData,
    IDeleteHistoryItemVariables
  >(DELETE_CURRENCY_ACCOUNT_HISTORY_ITEM)

  async function onRemove(_, { setVisible }) {
    setLoading(true)
    deleteHistory({
      variables: {
        currencyAccountHistoryId: id,
        numberOfHistoryItems: configCurrencyAccounts.numberOfHistoryItems,
        historyPage: page,
      },
    })

    setVisible(false)
    setLoading(false)
  }

  return (
    <IconButtonDelete
      title='Видалити операцію?'
      loading={loading}
      onOk={onRemove}
      className={className}
      disabled={disabled}
    />
  )
}
