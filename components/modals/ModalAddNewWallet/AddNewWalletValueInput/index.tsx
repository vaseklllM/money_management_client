import React, { ReactElement } from "react"
import { Select as AntdSelect } from "antd"
import classes from "./style.module.scss"
import { txt } from "@/utils"
import { Span14 } from "@/components/Typography"
import { Input } from "@/components/Inputs"
import AddNewWalletCurrencySelect from "./AddNewWalletCurrencySelect"

interface Props {
  value: string
  setValue: Function
  activeCurrency: string
  setActiveCurrency: (id: string) => any
  currencies: any[]
  className?: string
}

export default function AddNewWalletValueInput(props: Props): ReactElement {
  const { setValue, value, currencies, setActiveCurrency, className, activeCurrency } =
    props

  const { Option } = AntdSelect

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
        <AddNewWalletCurrencySelect />
        <AntdSelect
          defaultValue={currencies[0].id}
          className='select-after'
          onChange={setActiveCurrency}
          value={activeCurrency}
        >
          {currencies.map((el) => (
            <Option key={el.id} value={el.id}>
              {el.code}
            </Option>
          ))}
        </AntdSelect>
      </div>
    </div>
  )
}
