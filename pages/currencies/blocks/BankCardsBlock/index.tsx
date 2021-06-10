import FinanceContentBlock from "@/components/finance/FinanceContentBlock"
import { useQuery } from "@apollo/client"
import React, { ReactElement } from "react"
import BANK_CARDS from "./bankCards.gql"
import BankCardsBody from "./BankCardsBody"
import BankCardsTitleRow from "./BankCardsTitleRow"
import { IBankCardsData } from "./interfaces"

export default function BankCardsBlock(): ReactElement {
  const { loading, data } = useQuery<IBankCardsData>(BANK_CARDS)

  if (loading) return null

  /** true - якщо в користувача немає ні однієї підключеної банківської карти */
  const isNotCards = (() => {
    // console.log(data.bankcards)
    for (const key in data.bankcards) {
      if (Object.prototype.hasOwnProperty.call(data.bankcards, key)) {
        const el = data.bankcards[key]
        if (el && typeof el.token === "string" && el.token !== "") return false
      }
    }
    return true
  })()

  return (
    <FinanceContentBlock>
      <BankCardsTitleRow isNotCards={isNotCards} />
      {!isNotCards && <BankCardsBody data={data} />}
    </FinanceContentBlock>
  )
}
