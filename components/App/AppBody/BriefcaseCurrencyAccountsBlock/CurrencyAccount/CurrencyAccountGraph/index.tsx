import React, { ReactElement } from "react"
import {
  ICurrencyAccountsDataHistory,
  ICurrencyAccountsDataCurrency,
} from "../../interfaces"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import classes from "./style.module.scss"
import { Typography } from "antd"
import { date, txt } from "@/utils"
import randomColorRGB from "random-color-rgb"

interface Props {
  data: ICurrencyAccountsDataHistory[]
  currency: ICurrencyAccountsDataCurrency
  className?: string
}

export default function CurrencyAccountGraph({
  data,
  currency,
  className,
}: Props): ReactElement {
  const { Text } = Typography

  const numberFormat = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: currency.code,
  })

  const color = randomColorRGB({ max: 200, min: 20 })

  return (
    <div className={txt.join([classes.body, className])}>
      <ResponsiveContainer className={classes.schedule}>
        <AreaChart
          data={data.map((i) => ({
            name: date.convertToShowSchedule(i.date),
            uv: i.currencyAccountValue,
          }))}
        >
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip
            content={(params) => {
              const value: number = +params?.payload?.[0]?.value

              return (
                <div className={classes.tooltip}>
                  <Text className={classes.tooltip_label}>{params.label}</Text>
                  <Text className={classes.tooltip_value}>
                    {numberFormat.format(value)}
                  </Text>
                </div>
              )
            }}
          />
          <Area type='monotone' dataKey='uv' stroke={color} fill={color} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
