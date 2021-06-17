import { Typography } from "antd"
import React, { ReactElement } from "react"
import { IBankCardItem } from "../../../interfaces"
import classes from "./style.module.scss"

const { Text } = Typography

interface Props {
  data: IBankCardItem
}

export default function BankCardScheduleTitle({ data }: Props): ReactElement {
  return (
    <div className={classes.body}>
      <Text className={classes.fs_12} type='secondary'>
        Валюта: <Text>{data.currency.code}</Text>
      </Text>
      <Text className={classes.fs_12} type='secondary'>
        Номер картки: <Text>{data.cardNumber || "-"}</Text>
      </Text>
      <Text className={classes.fs_12} type='secondary'>
        iban: <Text>{data.iban}</Text>
      </Text>
    </div>
  )
}
