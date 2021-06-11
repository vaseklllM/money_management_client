import { Typography } from "antd"
import React, { ReactElement } from "react"
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts"
import classes from "./style.module.scss"

const { Text } = Typography

const data = [
  { symbol: "$", code: "USD", value: 123 },
  { symbol: "₴", code: "UAH", value: 456 },
  { symbol: "€", code: "EUR", value: 789 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill='white'
      className={classes.text}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline='central'
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

function renderLegend(params) {
  const { payload } = params

  return (
    <div className={classes.legend}>
      {payload.map((i, idx) => (
        <div className={classes.legend_item} key={idx}>
          <div
            className={classes.legend_item_color}
            style={{ backgroundColor: i.color }}
          />
          <Text className={classes.legend_item_text}>{i.payload.code}</Text>
        </div>
      ))}
    </div>
  )
}

function renderTooltip(params) {
  const payload = params?.payload?.[0]?.payload?.payload

  if (payload) {
    const value = payload.value

    const numberFormat = new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: payload.code,
    })

    return (
      <div className={classes.tooltip}>
        <Text>{numberFormat?.format(value)}</Text>
      </div>
    )
  }

  return null
}

const radius = 80

export default function CurrencyRatio(): ReactElement {
  return (
    <div>
      <Text type='secondary'>Співвідношення валют</Text>
      <div
        className={classes.ratio}
        style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}
      >
        <PieChart width={radius * 2} height={radius * 2}>
          <Tooltip content={renderTooltip} />
          <Legend verticalAlign='middle' content={renderLegend} />
          <Pie
            data={data}
            cx='50%'
            cy='50%'
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={radius}
            fill='#8884d8'
            dataKey='value'
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  )
}
