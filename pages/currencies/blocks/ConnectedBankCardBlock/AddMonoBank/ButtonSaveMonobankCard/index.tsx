import React, { ReactElement } from "react"
import { message } from "antd"
import SAVE_BANK from "./saveBank.gql"
import { useMutation } from "@apollo/client"
import { IMonobankUserData } from "@/api/banks/monobank/getUserInfo"
import { err } from "@/utils"
import { ButtonBlue } from "@/components/Buttons"

interface Props {
  token: string
  onClose: Function
  data: IMonobankUserData
}

interface ISaveBankData {
  addMonobank: {
    monobank: {
      token: string
    }
  }
}

interface ISaveBankVariablesCard {
  iban: string
  balance: number
  cardNumber: string
  currencyCode: string
}

interface ISaveBankVariables {
  token: string
  userFirstName: string
  userLastName: string
  cards: ISaveBankVariablesCard[]
}

export default function ButtonSaveMonobankCard(props: Props): ReactElement {
  const { token, onClose, data } = props
  const [saveToken, { loading: loadingSaveToken }] = useMutation<
    ISaveBankData,
    ISaveBankVariables
  >(SAVE_BANK)

  if (typeof token !== "string" || token === "") return null

  async function onSaveCards() {
    const key = 1
    try {
      message.loading({ content: "Збереження...", key })

      const nameArr = data.user.name.split(" ")

      await saveToken({
        variables: {
          token,
          userFirstName: nameArr[1],
          userLastName: nameArr[0],
          cards: data.bankCards.map((card) => ({
            iban: card.iban,
            balance: card.balance / 100,
            cardNumber: card.cardNumber,
            currencyCode: card.currency,
          })),
        },
      })

      message.success({ content: "Карту збережено", key })
      onClose()
    } catch (error) {
      message.error({ content: err.getFirstMessage(error), key })
    }
  }

  return (
    <ButtonBlue onClick={onSaveCards} loading={loadingSaveToken}>
      Зберегти
    </ButtonBlue>
  )
}
