export interface ICars {
  iban: string
  balance: number
  cardNumber: string
  currency: {
    code: string
  }
}

export interface IHistoryCard {
  date: Date
  cards: ICars[]
}
export interface IBankCardsMonobankData {
  token: string
  user: {
    firstName: string
    lastName: string
  }
  historyCards: IHistoryCard[]
}

export interface IBankCardsData {
  bankcards: {
    monobank?: IBankCardsMonobankData
  }
}
