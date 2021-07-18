import { gql } from "@apollo/client"

export const CURRENCY_ACCOUNT = gql`
  query currencyAccount(
    $currencyAccountId: ID!
    $numberOfHistoryItems: Int!
    $historyPage: Int!
  ) {
    currencyAccount(
      currencyAccountId: $currencyAccountId
      numberOfHistoryItems: $numberOfHistoryItems
      historyPage: $historyPage
    ) {
      id
      value
      history {
        title
        date
        value
        id
        currencyAccountValue
      }
      historyPagination {
        page
        amountOfElements
        numberOfPages
        amountOfElementsByPage
      }
    }
  }
`
