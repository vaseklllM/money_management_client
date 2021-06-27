import { gql } from "@apollo/client"

export const CURRENCIES = gql`
  query {
    currencies {
      id
      code
    }
  }
`

export interface currenciesData {
  currencies: {
    id: string
    code: string
  }[]
}

export interface currenciesVariables {
  numberOfHistoryItems: number
}
