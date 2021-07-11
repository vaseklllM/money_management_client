import { CircleLoader } from "@/components/Loaders"
import { IMessageType } from "@/components/Message/hooks/useMessage"
import React, { ReactElement } from "react"
import { ReactSVG } from "react-svg"
import checkedIcon from "./checked.svg"
import classes from "./style.module.scss"
import errorIcon from "./error.svg"

interface Props {
  type: IMessageType
}

export default function MessageItemIcon({ type }: Props): ReactElement {
  switch (type) {
    case "loading":
      return <CircleLoader color='blue' />

    case "success":
      return <ReactSVG src={checkedIcon} className={classes.checked_icon} />

    case "error":
      return <ReactSVG src={errorIcon} className={classes.error_icon} />

    default:
      return <CircleLoader color='blue' />
  }
}
