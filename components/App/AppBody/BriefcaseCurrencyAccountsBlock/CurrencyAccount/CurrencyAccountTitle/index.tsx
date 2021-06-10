import { Typography } from "antd"
import React, { ReactElement } from "react"
import { ICurrencyAccountsDataCurrency } from "../../interfaces"
import classes from "./style.module.scss"

interface Props {
  name: string
  currency: ICurrencyAccountsDataCurrency
}

export default function CurrencyAccountTitle({ name, currency }: Props): ReactElement {
  const { Text } = Typography

  return (
    <div className={classes.body}>
      <Text className={classes.name} type='secondary'>
        Назва: <Text>{name}</Text>
      </Text>
      <Text className={classes.currency} type='secondary'>
        Валюта: <Text>{currency.code}</Text>
      </Text>
    </div>
  )
}
