import { ButtonBlue } from "@/components/Buttons"
import { useMessage } from "@/components/Message/hooks"
import { err } from "@/utils"
import { useMutation } from "@apollo/client"
import React, { ReactElement, useState } from "react"
import { UPDATE_CURRENCY_ACCOUNT } from "./updateCurrencyAccount.gql"

interface Props {
  value: {
    name: string
    defaultName: string
    currencyId: string
    defaultCurrencyId: string
  }
  onSave: () => any
  id: string
}

interface IUpdateCurrencyAccountData {
  updateCurrencyAccount: {
    id: string
    name: string
    currency: {
      id: string
      code: string
      ISOCode: number
      symbol: string
    }
  }
}

interface IUpdateCurrencyAccountVariables {
  id: string
  name: string
  currencyId: string
}

export default function ModalEditWalletButtonSave({
  value,
  onSave,
  id,
}: Props): ReactElement {
  const [loading, setLoading] = useState(false)
  const message = useMessage()

  const [updateCurrencyAccount] = useMutation<
    IUpdateCurrencyAccountData,
    IUpdateCurrencyAccountVariables
  >(UPDATE_CURRENCY_ACCOUNT)

  async function save() {
    setLoading(true)

    try {
      await updateCurrencyAccount({
        variables: {
          id,
          name: value.name.trim(),
          currencyId: value.currencyId,
        },
      })

      setLoading(false)
      onSave()
    } catch (error) {
      message.error({ content: err.getFirstMessage(error) })
      setLoading(false)
    }
  }

  return (
    <ButtonBlue
      disabled={
        value.name === "" ||
        (value.name === value.defaultName && value.currencyId === value.defaultCurrencyId)
      }
      loading={loading}
      onClick={save}
    >
      Зберегти
    </ButtonBlue>
  )
}
