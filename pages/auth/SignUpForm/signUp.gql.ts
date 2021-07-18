import { gql } from "@apollo/client"

export const SING_UP = gql`
  mutation signUp($email: String!, $password: String!, $nickname: String!) {
    signUp(signUp: { email: $email, password: $password, nickname: $nickname }) {
      token
    }
  }
`
