import { Select } from "@/components/selects"
import { Span14 } from "@/components/Typography"
import { useQuery } from "@apollo/client"
import React, { ReactElement } from "react"
import { CURRENCIES } from "./currencies.gql"
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
  const { data, loading } = useQuery<ICurrenciesData>(CURRENCIES)

  if (loading) return null

  return (
    <div className={classes.body}>
      <Span14>Валюта</Span14>
      <Select
        data={data.currencies.map((currency) => ({
          id: currency.id,
          name: currency.code,
        }))}
        value={data.currencies.find((i) => i.id === currencyId).id}
        onChange={setCurrencyId}
      />
    </div>
  )
}
