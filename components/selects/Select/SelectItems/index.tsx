import { Scroll } from "@/components/scrolls"
import { txt } from "@/utils"
import React, { ReactElement } from "react"
import { ISelectDataItem, ISelectDataItemId } from ".."
import SelectItem from "./SelectItem"
import classes from "./style.module.scss"

interface Props {
  data: ISelectDataItem[]
  value: ISelectDataItemId
  onChange?: (id: ISelectDataItemId) => void
  className?: string
}

export default function SelectItems({
  data,
  value,
  onChange,
  className,
}: Props): ReactElement {
  return (
    <Scroll className={txt.join([classes.body, className])}>
      {data.map((el) => (
        <SelectItem
          key={el.id}
          className={classes.item}
          data={el}
          active={value === el.id}
          onChange={onChange}
        />
      ))}
    </Scroll>
  )
}
