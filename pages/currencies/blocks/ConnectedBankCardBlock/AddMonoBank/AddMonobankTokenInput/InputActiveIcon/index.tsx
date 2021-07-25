import React, { ReactElement } from "react"
import { status } from "../../../../../../../enums/status"
import { CircleLoader } from "@/components/Loaders"
import classes from "./style.module.scss"
import { ReactSVG } from "react-svg"

interface Props {
  isActiveToken: status
  className?: string
}

export default function InputActiveIcon(props: Props): ReactElement {
  const { isActiveToken, className } = props

  return (
    <div className={className}>
      {(() => {
        switch (isActiveToken) {
          case status.loading:
            return <CircleLoader color='black' className={classes.loader_icon} />

          case status.no_data:
          case status.error:
            return <ReactSVG src='icons/close.svg' className={classes.icon} />

          case status.successful:
            return <ReactSVG src='icons/check.svg' className={classes.icon} />

          default:
            return null
        }
      })()}
    </div>
  )
}
