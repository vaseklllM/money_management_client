import { useMutation, useQuery } from "@apollo/client"
import { UPDATE_SETTINGS } from "./updateSettings.gql"
import { SETTINGS } from "../../../settings.gql"

interface IReturnUseSideMenuChangeOpen {
  open: boolean
  setOpen: (v: boolean) => any
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
  const [updateSettings] = useMutation<ISettingsData, IUpdateSettingsVariables>(
    UPDATE_SETTINGS
  )

  async function setOpen(sideMenuOpen) {
    await updateSettings({
      variables: {
        sideMenuOpen: sideMenuOpen,
      },
    })
  }

  if (loading || !data) return { open: false, setOpen }

  return { open: data.settings.sideMenu.open, setOpen }
}
