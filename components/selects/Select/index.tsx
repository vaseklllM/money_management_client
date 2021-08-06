import { useClickListener } from "@/hooks"
import React, { ReactElement, useRef, useState } from "react"
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

  return (
    <div className={className} ref={ref}>
      <SelectHeader onClick={onOpen} />
      {open && <SelectItems data={data} value={value} onChange={onClose} />}
    </div>
  )
}
