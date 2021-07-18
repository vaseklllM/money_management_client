import { useResize } from "@/hooks"
import { useMutation } from "@apollo/client"
import { useEffect } from "react"
import { UPDATE_SETTINGS } from "./updateSettings.gql"

interface ISettingsData {
  settings: {
    id: string
    sideMenu: {
      open: boolean
    }
  }
}

interface IUpdateSettingsVariables {
  sideMenuOpen: boolean
}

export function useAdaptiveCollapsedSideMenu(bodyRef: React.MutableRefObject<any>) {
  const [updateSettings] = useMutation<ISettingsData, IUpdateSettingsVariables>(
    UPDATE_SETTINGS
  )

  const { width } = useResize(bodyRef)

  useEffect(() => {
    if (width < 700 && width !== 0) {
      updateSettings({
        variables: {
          sideMenuOpen: false,
        },
      })
    }
  }, [width < 700])
}
