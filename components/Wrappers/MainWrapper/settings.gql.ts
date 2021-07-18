import { gql } from "@apollo/client"

export const SETTINGS = gql`
  query {
    settings {
      id
      sideMenu {
        open
      }
    }
  }
`
