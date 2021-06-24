import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  onClick?: () => any
}

export default function ButtonLogout({ onClick }: Props): ReactElement {
  return (
    <button className={classes.button} onClick={onClick}>
      Вихід
    </button>
  )
}
