import { Typography } from "antd"
import React, { ReactElement } from "react"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { ICurrency } from "../interface"
import randomColorRGB from "random-color-rgb"
import classes from "./style.module.scss"
import { date } from "@/utils"
import ExchangeRatesGraphItemTitle from "./ExchangeRatesGraphItemTitle"

const { Text } = Typography

interface Props {
  data: ICurrency
}

export default function ExchangeRatesGraphItem({ data }: Props): ReactElement {
  const numberFormat = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: data.code,
  })

  const color = randomColorRGB({ max: 200, min: 20 })

  const historyCourseInUAHArr = data.historyCourseInUAH.map((i) => i.price)

  const max = Math.max(...historyCourseInUAHArr)
  const min = Math.min(...historyCourseInUAHArr)

  return (
    <div className={classes.body}>
      <ExchangeRatesGraphItemTitle currencyCode={data.code} />
      <ResponsiveContainer className={classes.schedule}>
        <AreaChart
          data={data.historyCourseInUAH.map((i) => ({
            name: date.convertToShowSchedule(i.date),
            uv: i.price,
          }))}
        >
          <XAxis dataKey='name' />
          <YAxis domain={[min, max]} />
          <Tooltip
            content={(params) => {
              const value: number = +params?.payload?.[0]?.value

              return (
                <div className={classes.tooltip}>
                  <Text className={classes.tooltip_fs_12}>{params.label}</Text>
                  <Text className={classes.tooltip_fs_12}>
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
