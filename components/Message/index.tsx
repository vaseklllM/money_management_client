import React, { ReactElement } from "react"
import { CircleLoader } from "../Loaders"
import classes from "./style.module.scss"

interface Props {}

export default function Message({}: Props): ReactElement {
  return (
    <div className={classes.body}>
      <CircleLoader color='blue' /> Message
    </div>
  )
}
