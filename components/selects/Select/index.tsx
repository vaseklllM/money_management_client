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
  const [show, setShow] = useState(false)
  const bodyRef = useRef()

  function onClickHeader() {
    setShow((v) => !v)
    document.addEventListener("click", clickOutside)
  }

  function onChangeItem() {
    setShow(false)
    document.removeEventListener("click", clickOutside)
  }

  function clickOutside(event) {
    const domNode = bodyRef.current
    // @ts-ignore
    if (!domNode || !domNode.contains(event.target)) setShow(false)
  }

  return (
    <div className={className} ref={bodyRef}>
      <SelectHeader onClick={onClickHeader} />
      {show && <SelectItems data={data} value={value} onChange={onChangeItem} />}
    </div>
  )
}
