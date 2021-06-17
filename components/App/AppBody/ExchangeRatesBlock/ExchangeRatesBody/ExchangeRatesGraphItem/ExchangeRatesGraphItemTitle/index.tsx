import { Typography } from "antd"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

const { Text } = Typography

interface Props {
  currencyCode: string
}

export default function ExchangeRatesGraphItemTitle({
  currencyCode,
}: Props): ReactElement {
  return (
    <div className={classes.body}>
      <Text className={classes.fs_12} type='secondary'>
        Валюта: <Text>{currencyCode}</Text>
      </Text>
    </div>
  )
}
