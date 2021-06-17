export interface ICurrency {
  code: string
  historyCourseInUAH: {
    price: number
    date: Date
  }[]
}

export interface ICurrenciesData {
  currencies: ICurrency[]
}
