import { Span14 } from "@/components/Typography"
import { txt } from "@/utils"
import React, { ReactElement } from "react"
import { ISelectDataItem } from "../.."
import classes from "./style.module.scss"

interface Props {
  data: ISelectDataItem
  active: boolean
}

export default function SelectItem({ data, active }: Props): ReactElement {
  return (
    <div className={txt.join([classes.body, active && classes.active])}>
      <Span14>{data.name}</Span14>
    </div>
  )
}
