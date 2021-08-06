import React, { ReactElement } from "react"
import { ISelectDataItem, ISelectDataItemId } from ".."
import SelectItem from "./SelectItem"
import classes from "./style.module.scss"

interface Props {
  data: ISelectDataItem[]
  value: ISelectDataItemId
  onChange: () => void
}

export default function SelectItems({ data, value, onChange }: Props): ReactElement {
  return (
    <div className={classes.body}>
      {data.map((el) => (
        <SelectItem key={el.id} data={el} active={value === el.id} />
      ))}
    </div>
  )
}
