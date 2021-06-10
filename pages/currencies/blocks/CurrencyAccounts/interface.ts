import { IPagination } from "@/interfaces";

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
