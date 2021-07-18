import { gql } from "@apollo/client"

export const UPDATE_CURRENCY_ACCOUNT = gql`
  mutation updateCurrencyAccount($id: ID!, $name: String!, $currencyId: ID!) {
    updateCurrencyAccount(
      updateCurrencyAccount: { id: $id, name: $name, currencyId: $currencyId }
    ) {
      id
      name
      currency {
        id
        code
        ISOCode
        symbol
      }
    }
  }
`
