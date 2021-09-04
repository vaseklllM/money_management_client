import { Span16 } from "@/components/Typography"
import { useQuery } from "@apollo/client"
import React, { ReactElement, useEffect, useState } from "react"
import CreatingNewWalletNameInput from "./CreatingNewWalletNameInput"
import CreatingNewWalletValueInput from "./CreatingNewWalletValueInput"
import { ICurrenciesData, CURRENCIES } from "./currencies.gql"
import classes from "./style.module.scss"

export default function CreatingNewCurrencyAccount(): ReactElement {
  const { data, loading } = useQuery<ICurrenciesData>(CURRENCIES)

  const [name, setName] = useState("")
  const [value, setValue] = useState("0")
  const [activeCurrency, setActiveCurrency] = useState<string>()

  useEffect(() => {
    if (!loading && data) {
      setActiveCurrency(data.currencies[0].id)
    }
  }, [loading])


  return (
    <div className={classes.body}>
      <Span16 className={classes.title}>Створення нового рахунку</Span16>
      <CreatingNewWalletNameInput name={name} setName={setName} />
      {!loading && activeCurrency && (
        <CreatingNewWalletValueInput
          currencies={data.currencies}
          value={value}
          setValue={setValue}
          activeCurrency={activeCurrency}
          setActiveCurrency={setActiveCurrency}
          className={classes.currency_input}
        />
      )}
    </div>
  )
}
