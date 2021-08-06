import { ISelectDataItem, ISelectDataItemId, Select } from "@/components/selects"
import React, { ReactElement, useState } from "react"

interface Props {}

const selectData: ISelectDataItem[] = [
  { id: 0, name: "select 1" },
  { id: 1, name: "select 2" },
  { id: 2, name: "select 3" },
]

export default function AddNewWalletCurrencySelect({}: Props): ReactElement {
  const [activeSelect, setActiveSelect] = useState<ISelectDataItemId>(selectData[0].id)

  return <Select data={selectData} value={activeSelect} onChange={setActiveSelect} />
}
