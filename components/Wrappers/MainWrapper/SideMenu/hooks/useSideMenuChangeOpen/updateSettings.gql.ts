import { gql } from "@apollo/client"

export const UPDATE_SETTINGS = gql`
  mutation updateSettings($sideMenuOpen: Boolean!) {
    updateSettings(updateSettings: { sideMenu: { open: $sideMenuOpen } }) {
      id
      sideMenu {
        open
      }
    }
  }
`
