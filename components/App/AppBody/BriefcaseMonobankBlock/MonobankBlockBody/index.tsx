import React, { ReactElement } from "react"
import { IBankCardsHistoryCards, IBankCardItem } from "../interfaces"
import BankCardSchedule from "./BankCardSchedule"
import classes from "./style.module.scss"

interface Props {
  className?: string
  data: IBankCardsHistoryCards[]
}

export default function MonobankBlockBody({ className, data }: Props): ReactElement {
  const newCardsData: IBankCardItem[] = convertCards(data)

  return (
    <div className={className}>
      <div className={classes.cards}>
        {newCardsData.map((el) => (
          <BankCardSchedule className={classes.item} key={el.iban} data={el} />
        ))}
      </div>
    </div>
  )
}

function convertCards(data: IBankCardsHistoryCards[]): IBankCardItem[] {
  let cards: IBankCardItem[] = []

  const reverseData = [...data].reverse()

  reverseData.forEach((historyItem) => {
    historyItem.cards.forEach((card) => {
      const activeCard = cards.find((i) => i.iban === card.iban)
      if (activeCard) {
        activeCard.history.push({ date: historyItem.date, balance: card.balance })
      } else {
        cards.push({
          iban: card.iban,
          cardNumber: card.cardNumber,
          currency: card.currency,
          history: [
            {
              date: historyItem.date,
              balance: card.balance,
            },
          ],
        })
      }
    })
  })

  return deleteEmptyCards(cards)
}

/** залишає тільки ті карти на яких є хоч якісь операції над рахунком */
function deleteEmptyCards(cards: IBankCardItem[]): IBankCardItem[] {
  let newCards: IBankCardItem[] = []

  cards.forEach((card) => {
    if (card.history.findIndex((i) => i.balance > 0) !== -1) {
      newCards.push(card)
    }
  })

  return newCards
}
