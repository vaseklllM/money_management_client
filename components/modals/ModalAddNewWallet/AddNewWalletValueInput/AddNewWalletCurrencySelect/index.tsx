import { ISelectDataItem, ISelectDataItemId, Select } from "@/components/selects"
import { arr } from "@/utils"
import React, { ReactElement, useState } from "react"

interface Props {}

const selectData: ISelectDataItem[] = arr.getArrByLength({ end: 15 }, (idx) => ({
  id: idx,
  name: `select ${idx}`,
}))

export default function AddNewWalletCurrencySelect({}: Props): ReactElement {
  const [activeSelect, setActiveSelect] = useState<ISelectDataItemId>(selectData[0].id)

  return <Select data={selectData} value={activeSelect} onChange={setActiveSelect} />
}
