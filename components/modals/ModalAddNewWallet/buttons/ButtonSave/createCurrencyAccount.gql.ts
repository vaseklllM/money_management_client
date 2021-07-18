import { gql } from "@apollo/client"

export const CREATE_CURRENCY_ACCOUNT = gql`
  mutation createCurrencyAccount($currencyId: ID!, $value: Float!, $name: String!) {
    createCurrencyAccount(
      createCurrencyAccount: { currencyId: $currencyId, value: $value, name: $name }
    ) {
      name
    }
  }
`
