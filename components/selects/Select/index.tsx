import { useClickListener } from "@/hooks"
import React, { ReactElement } from "react"
import SelectHeader from "./SelectHeader"
import SelectItems from "./SelectItems"

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

  function onChangeActiveItem() {
    onClose()
  }

  return (
    <div className={className} ref={ref}>
      <SelectHeader
        onClick={onOpen}
        open={open}
        activeEl={data.find((i) => i.id === value)}
      />
      {open && <SelectItems data={data} value={value} onChange={onChangeActiveItem} />}
    </div>
  )
}
