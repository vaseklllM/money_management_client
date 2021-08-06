import React, { ReactElement } from "react"
import { DELETE_CURRENCY_ACCOUNT } from "./deleteCurrencyAccount.gql"
import { useLazyQuery, useMutation } from "@apollo/client"
import { err } from "@/utils"
import { CURRENCY_ACCOUNTS } from "./currencyAccounts.gql"
import { useStateIfMounted } from "use-state-if-mounted"
import { IconButtonDelete } from "@/components/Buttons"
import { useMessage } from "@/components/Message/hooks"

interface Props {
  className?: string
  id: string
}

interface IDeleteCurrencyAccountData {
  deleteCurrencyAccount: {
    id: string
  }
}

interface IDeleteCurrencyAccountVariables {
  id: string
}

interface ICurrencyAccountsData {
  deleteCurrencyAccount: {
    name: string
  }
}

export default function CurrencyAccountItemDeleteIcon({
  className,
  id,
}: Props): ReactElement {
  const [confirmLoading, setConfirmLoading] = useStateIfMounted(false)
  const message = useMessage()

  const [onDeleteCurrencyAccount] = useMutation<
    IDeleteCurrencyAccountData,
    IDeleteCurrencyAccountVariables
  >(DELETE_CURRENCY_ACCOUNT)

  const [getCurrencyAccounts] = useLazyQuery<ICurrencyAccountsData>(CURRENCY_ACCOUNTS, {
    fetchPolicy: "cache-and-network",
    variables: {
      numberOfHistoryItems: 5,
    },
  })

  /** Видалення рахунку */
  async function onOk({ setVisible }) {
    setConfirmLoading(true)

    try {
      await onDeleteCurrencyAccount({
        variables: {
          id,
        },
      })

      setConfirmLoading(false)
      setVisible(false)
      await getCurrencyAccounts()
    } catch (error) {
      message.error({ content: err.getFirstMessage(error) })
      setConfirmLoading(false)
    }
  }

  return (
    <IconButtonDelete
      onOk={onOk}
      loading={confirmLoading}
      title='Видалити рахунок?'
      className={className}
    />
  )
}
