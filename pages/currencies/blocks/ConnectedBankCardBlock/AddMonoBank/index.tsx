import React, { ReactElement, useEffect, useState } from "react"
import AddMonobankTokenInput from "./AddMonobankTokenInput"
import AddMonobankCardData from "./AddMonobankCardData"
import AddMonobankTitleRow from "./AddMonobankTitleRow"
import BancCard from "@/components/finance/BancCard"
import { IMonobankUserData } from "@/api/banks/monobank/getUserInfo"
import { useLazyQuery, useMutation } from "@apollo/client"
import BANK_CARDS from "./bankCards.gql"
import DELETE_CARDS from "./deleteCards.gql"

interface IBank {
  token: string
  isValidToken: boolean
}

interface bankCards {
  monobank: IBank
}

interface Props {
  className?: string
}

interface queryData {
  bankcards: bankCards
}

interface IDeleteCardsData {
  deleteBankCards: bankCards
}

interface IDeleteCardVariables {
  keys: (keyof bankCards)[]
}

export default function AddMonobank(props: Props): ReactElement {
  const { className } = props
  const [token, setToken] = useState<string>("")
  const [cardData, setCardData] = useState<IMonobankUserData | null>(null)
  const [getBankCards, { loading, data }] = useLazyQuery<queryData>(BANK_CARDS, {
    fetchPolicy: "cache-and-network",
  })
  const [deleteCard] = useMutation<IDeleteCardsData, IDeleteCardVariables>(DELETE_CARDS)

  useEffect(() => {
    getBankCards()
  }, [])

  const inputPlaceholder = "Токен"

  if (loading || !data) {
    return (
      <BancCard
        className={className}
        title='Монобанк'
        added={typeof data?.bankcards?.monobank?.token === "string"}
        isValid={data?.bankcards?.monobank?.isValidToken}
      />
    )
  }

  /** видалення банківської карти */
  async function onDeleteCard() {
    const { data } = await deleteCard({
      variables: {
        keys: ["monobank"],
      },
    })

    if (!data.deleteBankCards?.monobank?.token) {
      getBankCards()
    }
  }

  return (
    <BancCard
      className={className}
      title='Монобанк'
      added={typeof data.bankcards?.monobank?.token === "string"}
      onDelete={onDeleteCard}
      isValid={data?.bankcards?.monobank?.isValidToken ?? null}
    >
      {(params) => {
        /** Закриття форми та видалення даних після збереження карти */
        function onClose() {
          setToken("")
          setCardData(null)
          params.onClose()
          getBankCards()
        }

        return (
          <>
            <AddMonobankTitleRow inputPlaceholder={inputPlaceholder} />
            <AddMonobankTokenInput
              token={token}
              setToken={setToken}
              placeholder={inputPlaceholder}
              setCardData={setCardData}
            />
            <AddMonobankCardData data={cardData} token={token} onClose={onClose} />
          </>
        )
      }}
    </BancCard>
  )
}
