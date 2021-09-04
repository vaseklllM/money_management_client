import React, { ReactElement } from "react"
import classes from "./style.module.scss"
import { txt } from "@/utils"
import { Span14 } from "@/components/Typography"
import { Input } from "@/components/Inputs"
import { ICurrency } from "../currencies.gql"
import { Select } from "@/components/selects"

interface Props {
  value: string
  setValue: Function
  activeCurrency: string
  setActiveCurrency: (id: string) => any
  currencies: ICurrency[]
  className?: string
}

export default function CreatingNewWalletValueInput({
  setValue,
  value,
  currencies,
  setActiveCurrency,
  className,
  activeCurrency,
}: Props): ReactElement {
  return (
    <div className={txt.join([className, classes.body])}>
      <div className={classes.title_row}>
        <Span14>Початкова сума</Span14>
        <Span14>Валюта</Span14>
      </div>
      <div className={classes.inputs}>
        <Input
          className={classes.input}
          value={value}
          onChange={(e) =>
            setValue(txt.parseInputFloat(e.target.value, { fixedNumbers: 2 }))
          }
          placeholder='Сума'
        />
        <Select
          data={currencies.map((currency) => ({ id: currency.id, name: currency.code }))}
          value={activeCurrency}
          onChange={setActiveCurrency}
        />
      </div>
    </div>
  )
}
