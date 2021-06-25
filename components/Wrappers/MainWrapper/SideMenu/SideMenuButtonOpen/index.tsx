import { txt } from "@/utils"
import React, { ReactElement } from "react"
import { ReactSVG } from "react-svg"
import icon from "./next.svg"
import classes from "./style.module.scss"

interface Props {
  className?: string
  setOpen: (v: boolean) => any
  open: boolean
}

export default function SideMenuButtonOpen({
  className,
  open,
  setOpen,
}: Props): ReactElement {
  return (
    <button
      onClick={() => setOpen(!open)}
      className={txt.join([className, classes.button, open && classes.open])}
    >
      <ReactSVG src={icon} className={classes.icon} />
    </button>
  )
}
