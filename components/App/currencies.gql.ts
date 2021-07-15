import { gql } from "@apollo/client"

export const CURRENCIES = gql`
  query currencies($numberOfHistoryItems: Int!) {
    currencies(numberOfHistoryItems: $numberOfHistoryItems) {
      code
      symbol
      historyCourseInUAH {
        price
        date
      }
    }
  }
`
