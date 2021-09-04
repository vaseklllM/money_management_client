import { gql } from "@apollo/client"

export const CURRENCIES = gql`
  query {
    currencies {
      id
      code
    }
  }
`

export interface ICurrency {
  id: string
  code: string
}

export interface ICurrenciesData {
  currencies: ICurrency[]
}
