import { txt } from "@/utils"
import Link from "next/link"
import React, { ReactElement } from "react"
import { ReactSVG } from "react-svg"
import classes from "./style.module.scss"

interface Props {
  text: string
  to: string
  icon: string
  className?: string
}

export default function SideMenuLink({ icon, text, to, className }: Props): ReactElement {
  return (
    <Link href={to}>
      <a className={txt.join([classes.link, className])}>
        <ReactSVG className={classes.icon} src={icon} />
        <span className={classes.text}>{text}</span>
      </a>
    </Link>
  )
}
