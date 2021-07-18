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
      }
    }
  }
`
