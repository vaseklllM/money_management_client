import { gql } from "@apollo/client"

export const ADD_TRANSACTION = gql`
  mutation addTransactionCurrencyAccount(
    $currencyAccountId: ID!
    $value: Float!
    $title: String!
    $numberOfHistoryItems: Int!
    $historyPage: Int!
  ) {
    addTransactionCurrencyAccount(
      addTransactionCurrencyAccount: {
        currencyAccountId: $currencyAccountId
        value: $value
        title: $title
        numberOfHistoryItems: $numberOfHistoryItems
        historyPage: $historyPage
      }
    ) {
      id
      value
      history {
        id
        title
        value
        date
      }
      historyPagination {
        page
        amountOfElements
        amountOfElementsByPage
        numberOfPages
      }
    }
  }
`
