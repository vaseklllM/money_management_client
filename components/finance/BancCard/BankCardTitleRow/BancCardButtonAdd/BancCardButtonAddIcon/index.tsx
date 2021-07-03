import React, { ReactElement } from "react"
import { ReactSVG } from "react-svg"
import deleteIcon from "./delete.svg"
import plusIcon from "./add.svg"
import minusIcon from "./minus.svg"
import classes from "./style.module.scss"
import { txt } from "@/utils"

interface Props {
  icon: "delete" | "plus" | "minus"
}

export default function BancCardButtonAddIcon({ icon }: Props): ReactElement {
  switch (icon) {
    case "delete":
      return <ReactSVG className={classes.icon} src={deleteIcon} />

    case "plus":
      return (
        <ReactSVG className={txt.join([classes.icon, classes.plusIcon])} src={plusIcon} />
      )

    case "minus":
      return (
        <ReactSVG
          className={txt.join([classes.icon, classes.minusIcon])}
          src={minusIcon}
        />
      )

    default:
      return null
  }
}
