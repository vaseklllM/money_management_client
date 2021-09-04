import { gql } from "@apollo/client"

export const AUTH = gql`
  query {
    user {
      id
      registrationDate
    }
  }
`

export interface IAuth {
  user: {
    id: string
    registrationDate: Date
  }
}
