import { txt } from "@/utils"
import { useQuery } from "@apollo/client"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { ReactElement } from "react"
import { ReactSVG } from "react-svg"
import classes from "./style.module.scss"
import { SETTINGS } from "../../settings.gql"

interface Props {
  text: string
  to: string
  icon: string
  className?: string
}

interface ISettingsData {
  settings: {
    sideMenu: {
      open?: boolean
    }
  }
}

export default function SideMenuLink({ icon, text, to, className }: Props): ReactElement {
  const { data, loading } = useQuery<ISettingsData>(SETTINGS)
  const router = useRouter()

  if (loading || !data) return null

  const { open } = data.settings.sideMenu

  return (
    <Link href={to}>
      <a
        className={txt.join([
          classes.link,
          className,
          router.pathname === to && classes.active,
          open && classes.open_link,
        ])}
      >
        <ReactSVG className={classes.icon} src={`sideMenuIcons/${icon}.svg`} />
        <span className={classes.text}>{text}</span>
      </a>
    </Link>
  )
}
