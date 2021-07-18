import { ButtonBlue } from "@/components/Buttons"
import { useMessage } from "@/components/Message/hooks"
import { err } from "@/utils"
import { useLazyQuery, useMutation } from "@apollo/client"
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
  const message = useMessage()

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
      message.success({ content: "Рахунок збережено" })
      onCancel()
    } catch (error) {
      message.error({ content: err.getFirstMessage(error) })
      setLoading(false)
    }
  }

  return (
    <ButtonBlue
      disabled={!value.currency || value.name === ""}
      loading={loading}
      onClick={save}
    >
      Створити
    </ButtonBlue>
  )
}
