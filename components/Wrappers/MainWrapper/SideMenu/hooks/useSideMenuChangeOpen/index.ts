import { useMutation, useQuery } from "@apollo/client"
import UPDATE_SETTINGS from "./updateSettings.gql"
import SETTINGS from "./settings.gql"

interface IReturnUseSideMenuChangeOpen {
  collapsed: boolean
  setCollapsed: (v: boolean) => any
}

interface ISettingsData {
  settings: {
    sideMenu: {
      open?: boolean
    }
  }
}

interface IUpdateSettingsVariables {
  sideMenuOpen: boolean
}

export function useSideMenuChangeOpen(): IReturnUseSideMenuChangeOpen {
  const { data, loading } = useQuery<ISettingsData>(SETTINGS)
  const [updateSettings] =
    useMutation<ISettingsData, IUpdateSettingsVariables>(UPDATE_SETTINGS)

  async function setCollapsed(sideMenuOpen) {
    await updateSettings({
      variables: {
        sideMenuOpen: !sideMenuOpen,
      },
    })
  }

  if (loading) return { collapsed: true, setCollapsed }

  return { collapsed: !data.settings.sideMenu.open, setCollapsed }
}
