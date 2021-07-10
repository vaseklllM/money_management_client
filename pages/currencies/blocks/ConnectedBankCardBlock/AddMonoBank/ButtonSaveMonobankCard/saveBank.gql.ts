import { gql } from "@apollo/client"

export const SAVE_BANK = gql`
  mutation addMonobank(
    $token: String!
    $userFirstName: String!
    $userLastName: String!
    $cards: [BankCardInput!]!
  ) {
    addMonobank(
      addMonobank: {
        token: $token
        userFirstName: $userFirstName
        userLastName: $userLastName
        cards: $cards
      }
    ) {
      monobank {
        token
        isValidToken
      }
    }
  }
`

export interface ISaveBankData {
  addMonobank: {
    monobank: {
      token: string
    }
  }
}

interface ISaveBankVariablesCard {
  iban: string
  balance: number
  cardNumber: string
  currencyCode: string
}

export interface ISaveBankVariables {
  token: string
  userFirstName: string
  userLastName: string
  cards: ISaveBankVariablesCard[]
}
