import { gql } from "@apollo/client"

export const CURRENCY_ACCOUNTS = gql`
  query currencyAccounts($numberOfHistoryItems: Int!) {
    currencyAccounts(numberOfHistoryItems: $numberOfHistoryItems) {
      id
      value
      name
      history {
        title
        date
        currencyAccountValue
      }
      currency {
        code
        symbol
        historyCourseInUAH {
          price
        }
      }
    }
  }
`
