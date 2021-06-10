import React, { ReactElement } from "react"
import { Input, Select, Typography } from "antd"
import classes from "./style.module.scss"
import { txt } from "@/utils"
import { ICurrency } from "../interfaces"

interface Props {
  value: string
  setValue: Function
  activeCurrency: string
  setActiveCurrency: (id: string) => any
  currencies: ICurrency[]
  className?: string
}

export default function AddNewWalletValueInput(props: Props): ReactElement {
  const { setValue, value, currencies, setActiveCurrency, className, activeCurrency } =
    props

  const { Option } = Select
  const { Text } = Typography

  const selectAfter = (
    <Select
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
    </Select>
  )

  return (
    <div className={txt.join([className, classes.body])}>
      <div className={classes.title_row}>
        <Text>Початкова сума</Text>
        <Text>Валюта</Text>
      </div>
      <Input
        className={classes.input}
        addonAfter={selectAfter}
        defaultValue={value}
        value={value}
        onChange={(e) =>
          setValue(txt.parseInputFloat(e.target.value, { fixedNumbers: 2 }))
        }
        placeholder='Сума'
      />
    </div>
  )
}
