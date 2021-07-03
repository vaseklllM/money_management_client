import { gql } from "@apollo/client"

export const DELETE_CARDS = gql`
  mutation deleteCards($keys: [String!]!) {
    deleteBankCards(deleteBankCards: { keys: $keys }) {
      monobank {
        token
      }
    }
  }
`

interface IBank {
  token: string
  isValidToken: boolean
}

export interface IBankCards {
  monobank: IBank
}

export interface IDeleteCardsData {
  deleteBankCards: IBankCards
}

export interface IDeleteCardVariables {
  keys: (keyof IBankCards)[]
}
