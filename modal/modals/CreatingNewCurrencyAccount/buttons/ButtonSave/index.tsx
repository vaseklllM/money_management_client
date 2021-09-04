import { ButtonBlue } from "@/components/Buttons"
import { useMessage } from "@/components/Message/hooks"
import { useModal } from "@/hooks"
import { err } from "@/utils"
import { useLazyQuery, useMutation } from "@apollo/client"
import React, { ReactElement } from "react"
import { useStateIfMounted } from "use-state-if-mounted"
import { CREATE_CURRENCY_ACCOUNT } from "./createCurrencyAccount.gql"
import { CURRENCY_ACCOUNTS } from "./currencyAccounts.gql"

interface Props {
  value: {
    sum: number
    currency: string
    name: string
  }
  className?: string
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
  const { value, className } = props
  const [loading, setLoading] = useStateIfMounted(false)
  const message = useMessage()
  const modal = useModal()

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
      modal.close()
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
      className={className}
    >
      Створити
    </ButtonBlue>
  )
}
