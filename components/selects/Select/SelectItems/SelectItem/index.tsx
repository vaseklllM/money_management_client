import { Span14 } from "@/components/Typography"
import { txt } from "@/utils"
import React, { ReactElement } from "react"
import { ISelectDataItem, ISelectDataItemId } from "../.."
import classes from "./style.module.scss"

interface Props {
  data: ISelectDataItem
  active: boolean
  onChange?: (id: ISelectDataItemId) => void
  className?: string
}

export default function SelectItem({
  data,
  active,
  onChange,
  className,
}: Props): ReactElement {
  function onClick() {
    onChange(data.id)
  }

  return (
    <div
      className={txt.join([className, classes.body, active && classes.active])}
      onClick={onClick}
    >
      <Span14 className={classes.text} >{data.name}</Span14>
    </div>
  )
}
