import { txt } from "@/utils"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  onClick?: () => any
  className?: string
}

export default function ButtonLogout({ onClick, className }: Props): ReactElement {
  return (
    <button className={txt.join([classes.button, className])} onClick={onClick}>
      Вихід
    </button>
  )
}
