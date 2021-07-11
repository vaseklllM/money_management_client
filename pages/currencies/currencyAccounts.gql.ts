import { IPagination } from "@/interfaces"
import { gql } from "@apollo/client"

export const CURRENCY_ACCOUNTS = gql`
  query currencyAccounts($numberOfHistoryItems: Int!) {
    currencyAccounts(numberOfHistoryItems: $numberOfHistoryItems) {
      id
      name
      value
      currency {
        id
        code
      }
      history {
        title
        date
        value
        id
        currencyAccountValue
      }
      historyPagination {
        page
        amountOfElements
        numberOfPages
        amountOfElementsByPage
      }
    }
  }
`

export interface ICurrencyAccountDataHistory {
  id: string
  title: string
  date: Date
  value: number
  currencyAccountValue: number
}

export interface ICurrencyAccountDataCurrency {
  id: string
  code: string
}

export interface ICurrencyAccountData {
  name: string
  value: number
  currency: ICurrencyAccountDataCurrency
  history: ICurrencyAccountDataHistory[]
  historyPagination: IPagination
  id: string
}

export interface ICurrencyAccountsData {
  currencyAccounts: ICurrencyAccountData[]
}

export interface ICurrencyAccountsVariables {
  numberOfHistoryItems: number
}
