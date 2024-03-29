import { date, txt } from "@/utils"
import React, { ReactElement } from "react"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { IBankCardItem } from "../../interfaces"
import BankCardScheduleTitle from "./BankCardScheduleTitle"
import classes from "./style.module.scss"
import randomColorRGB from "random-color-rgb"
import { Span14 } from "@/components/Typography"

interface Props {
  data: IBankCardItem
  className?: string
}

export default function BankCardSchedule({ data, className }: Props): ReactElement {
  const numberFormat = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: data.currency.code,
  })

  const color = randomColorRGB({ max: 200, min: 20 })

  return (
    <div className={txt.join([classes.body, className])}>
      <BankCardScheduleTitle data={data} />
      <ResponsiveContainer className={classes.schedule}>
        <AreaChart
          data={data.history.map((i) => ({
            name: date.convertToShowSchedule(i.date),
            uv: i.balance,
          }))}
        >
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip
            content={(params) => {
              const value: number = +params?.payload?.[0]?.value

              return (
                <div className={classes.tooltip}>
                  <Span14 className={classes.tooltip_fs_12}>{params.label}</Span14>
                  <Span14 className={classes.tooltip_fs_12}>
                    {numberFormat.format(value)}
                  </Span14>
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
