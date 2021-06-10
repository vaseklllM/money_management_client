import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  children?: ReactElement | ReactElement[]
  onSubmit?: any
}

export default function AuthPageForm(props: Props): ReactElement {
  const { children, onSubmit } = props

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      {children}
    </form>
  )
}
