import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  children?: string | number
}

export const H5 = ({ children }: Props): ReactElement => (
  <h5 className={classes.h5}>{children}</h5>
)
