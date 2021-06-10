export interface ICurrencyAccountsDataCurrency {
  code: string
}
export interface ICurrencyAccountsDataHistory {
  title: string
  date: Date
  currencyAccountValue: number
}
export interface ICurrencyAccountsData {
  id: string
  value: number
  name: string
  currency: ICurrencyAccountsDataCurrency
  history: ICurrencyAccountsDataHistory[]
}

export interface ICurrencyAccountsQueryData {
  currencyAccounts: ICurrencyAccountsData[]
}
