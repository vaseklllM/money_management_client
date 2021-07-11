import { gql } from "@apollo/client"

export const BANK_CARDS = gql`
  query {
    bankcards {
      monobank {
        token
        isValidToken
        user {
          firstName
          lastName
        }
        historyCards {
          date
          cards {
            iban
            cardNumber
            balance
            currency {
              code
            }
          }
        }
      }
    }
  }
`
