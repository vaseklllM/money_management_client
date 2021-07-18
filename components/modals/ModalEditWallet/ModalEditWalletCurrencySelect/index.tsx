import { Span14 } from "@/components/Typography"
import { useQuery } from "@apollo/client"
import { Select } from "antd"
import React, { ReactElement } from "react"
import CURRENCIES from "./currencies.gql"
import classes from "./style.module.scss"

interface Props {
  setCurrencyId: (id: string) => any
  currencyId: string
}

export interface ICurrency {
  id: string
  code: string
}

export interface ICurrenciesData {
  currencies: ICurrency[]
}

export default function ModalEditWalletCurrencySelect({
  currencyId,
  setCurrencyId,
}: Props): ReactElement {
  const { Option } = Select

  const { data, loading } = useQuery<ICurrenciesData>(CURRENCIES)

  if (loading) return null

  const activeEl = data.currencies.find((i) => i.id === currencyId).code

  return (
    <div className={classes.body}>
      <Span14>Валюта</Span14>
      <Select
        style={{ width: 120 }}
        onChange={setCurrencyId}
        className={classes.select}
        value={activeEl}
      >
        {data.currencies.map((el) => (
          <Option key={el.id} value={el.id}>
            {el.code}
          </Option>
        ))}
      </Select>
    </div>
  )
}
