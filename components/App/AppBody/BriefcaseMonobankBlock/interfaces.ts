interface IBankCardsCardItem {
  iban: string
  cardNumber: string
  balance: number
  currency: {
    code: string
  }
}

interface IBankCardItemHistoryItem {
  date: Date
  balance: number
}

export interface IBankCardItem {
  cardNumber?: string
  iban: string
  currency: {
    code: string
  }
  history: IBankCardItemHistoryItem[]
}

export interface IBankCardsHistoryCards {
  date: Date
  id: string
  cards: IBankCardsCardItem[]
}

export interface IBankCardsUser {
  firstName: string
  lastName: string
}

export interface IBankCards {
  bankcards: {
    monobank: {
      token: string
      user: IBankCardsUser
      historyCards: IBankCardsHistoryCards[]
    }
  }
}
