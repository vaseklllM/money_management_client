import ContentBlock from "@/components/finance/ContentBlock"
import { useQuery } from "@apollo/client"
import React, { ReactElement } from "react"
import { BANK_CARDS } from "../../bankCards.gql"
import BankCardsBody from "./BankCardsBody"
import BankCardsTitleRow from "./BankCardsTitleRow"
import { IBankCardsData } from "./interfaces"

export default function BankCardsBlock(): ReactElement {
  const { loading, data } = useQuery<IBankCardsData>(BANK_CARDS)

  if (loading || !data) return null

  /** true - якщо в користувача немає ні однієї підключеної банківської карти */
  const isNotCards = (() => {
    for (const key in data.bankcards) {
      if (Object.prototype.hasOwnProperty.call(data.bankcards, key)) {
        const el = data.bankcards[key]
        if (el && typeof el.token === "string" && el.token !== "") return false
      }
    }
    return true
  })()

  return (
    <ContentBlock>
      <BankCardsTitleRow isNotCards={isNotCards} />
      {!isNotCards && <BankCardsBody data={data} />}
    </ContentBlock>
  )
}
