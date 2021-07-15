import { gql } from "@apollo/client"

export const BANK_CARDS = gql`
  query {
    bankcards {
      monobank {
        token
        user {
          firstName
          lastName
        }
        historyCards {
          date
          id
          cards {
            iban
            cardNumber
            balance
            currency {
              code
              symbol
              historyCourseInUAH {
                price
              }
            }
          }
        }
      }
    }
  }
`
