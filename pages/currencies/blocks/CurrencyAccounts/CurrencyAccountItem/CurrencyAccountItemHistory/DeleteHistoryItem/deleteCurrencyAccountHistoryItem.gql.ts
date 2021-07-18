import { gql } from "@apollo/client"

export const DELETE_CURRENCY_ACCOUNT_HISTORY_ITEM = gql`
  mutation deleteTransactionCurrencyAccount(
    $currencyAccountHistoryId: ID!
    $numberOfHistoryItems: Int!
    $historyPage: Int!
  ) {
    deleteTransactionCurrencyAccount(
      deleteTransactionCurrencyAccount: {
        currencyAccountHistoryId: $currencyAccountHistoryId
        numberOfHistoryItems: $numberOfHistoryItems
        historyPage: $historyPage
      }
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
