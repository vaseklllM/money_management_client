import { gql } from "@apollo/client"

export const DELETE_CURRENCY_ACCOUNT = gql`
  mutation deleteCurrencyAccount($id: ID!) {
    deleteCurrencyAccount(deleteCurrencyAccount: { id: $id }) {
      name
    }
  }
`
