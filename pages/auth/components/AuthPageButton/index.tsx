import { txt } from "@/utils"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  text: string
  onClick?: any
  ghost?: boolean
  className?: string
}

export default function AuthPageButton(props: Props): ReactElement {
  const { text, onClick, ghost, className } = props

  return (
    <button
      className={txt.join([classes.button, ghost && classes.ghost, className])}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
