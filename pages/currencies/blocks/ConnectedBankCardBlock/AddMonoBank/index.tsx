import React, { ReactElement, useState } from "react"
import AddMonobankTokenInput from "./AddMonobankTokenInput"
import AddMonobankCardData from "./AddMonobankCardData"
import AddMonobankTitleRow from "./AddMonobankTitleRow"
import BancCard from "@/components/finance/BancCard"
import { IMonobankUserData } from "@/api/banks/monobank/getUserInfo"
import { useMutation, useQuery } from "@apollo/client"
import {
  DELETE_CARDS,
  IDeleteCardsData,
  IDeleteCardVariables,
  IBankCards,
} from "./deleteCards.gql"
import { BANK_CARDS } from "@/pages/currencies/bankCards.gql"

interface Props {
  className?: string
}

interface queryData {
  bankcards: IBankCards
}

export default function AddMonobank(props: Props): ReactElement {
  const { className } = props
  const [token, setToken] = useState<string>("")
  const [cardData, setCardData] = useState<IMonobankUserData | null>(null)

  const { loading, data, refetch } = useQuery<queryData>(BANK_CARDS)
  const [deleteCard] = useMutation<IDeleteCardsData, IDeleteCardVariables>(DELETE_CARDS)

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
      refetch()
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
        /** Закриття форми, та після видалення даних після збереження карти */
        function onClose() {
          setToken("")
          setCardData(null)
          params.onClose()
          refetch()
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
