import { err } from "@/utils"
import { useLazyQuery, useMutation } from "@apollo/client"
import { Button, message } from "antd"
import React, { ReactElement } from "react"
import { useStateIfMounted } from "use-state-if-mounted"
import CREATE_CURRENCY_ACCOUNT from "./createCurrencyAccount.gql"
import CURRENCY_ACCOUNTS from "./currencyAccounts.gql"

interface Props {
  onCancel: Function
  value: {
    sum: number
    currency: string
    name: string
  }
}

interface ICurrencyAccountData {
  createCurrencyAccount: {
    name: string
  }
}

interface ICurrencyAccountVariables {
  currencyId: string
  value: number
  name: string
}

export default function ButtonSave(props: Props): ReactElement {
  const { onCancel, value } = props
  const [loading, setLoading] = useStateIfMounted(false)

  const [createCurrencyAccount] = useMutation<
    ICurrencyAccountData,
    ICurrencyAccountVariables
  >(CREATE_CURRENCY_ACCOUNT)

  const [getCurrencyAccounts] = useLazyQuery(CURRENCY_ACCOUNTS, {
    fetchPolicy: "cache-and-network",
    variables: {
      numberOfHistoryItems: 5,
    },
  })

  async function save() {
    setLoading(true)

    try {
      await createCurrencyAccount({
        variables: {
          currencyId: value.currency,
          name: value.name.trim(),
          value: value.sum,
        },
      })

      await getCurrencyAccounts()

      setLoading(false)
      message.success("Рахунок збережено")
      onCancel()
    } catch (error) {
      message.error(err.getFirstMessage(error))
      setLoading(false)
    }
  }

  return (
    <Button
      disabled={!value.currency || value.name === ""}
      type='primary'
      loading={loading}
      onClick={save}
    >
      Створити
    </Button>
  )
}
