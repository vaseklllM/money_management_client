import { useClickListener } from "@/hooks"
import { txt } from "@/utils"
import React, { ReactElement } from "react"
import SelectHeader from "./SelectHeader"
import SelectItems from "./SelectItems"
import classes from "./style.module.scss"

export type ISelectDataItemId = string | number

export interface ISelectDataItem {
  name: string | number
  id: ISelectDataItemId
}

interface Props {
  className?: string
  data: ISelectDataItem[]
  onChange: (event: ISelectDataItemId) => void
  value: ISelectDataItemId
}

export default function Select({
  className,
  onChange,
  data,
  value,
}: Props): ReactElement {
  const { ref, open, onOpen, onClose } = useClickListener()

  function onChangeActiveItem(id: ISelectDataItemId) {
    onChange(id)
    onClose()
  }

  return (
    <div className={txt.join([className, classes.body])} ref={ref}>
      <SelectHeader
        onClick={onOpen}
        open={open}
        activeEl={data.find((i) => i.id === value)}
      />
      {open && (
        <SelectItems
          className={classes.content}
          data={data}
          value={value}
          onChange={onChangeActiveItem}
        />
      )}
    </div>
  )
}
