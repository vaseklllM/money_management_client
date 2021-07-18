import { gql } from "@apollo/client"

export const CURRENCIES = gql`
  query {
    currencies {
      id
      code
    }
  }
`
