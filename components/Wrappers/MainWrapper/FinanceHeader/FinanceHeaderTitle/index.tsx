import React, { ReactElement } from "react"
import { LoadingOutlined } from "@ant-design/icons"
import { Spin } from "antd"
import { Typography } from "antd"
import classes from "./style.module.scss"
import CURRENCIES from "./currencies.gql"
import { useQuery } from "@apollo/client"

interface ICurrencies {
  currencies: {
    code: string
    symbol: string
    historyCourseInUAH: {
      price: number
    }[]
  }[]
}

export default function FinanceHeaderTitle(): ReactElement {
  const { Title } = Typography

  const { data, loading, error } = useQuery<ICurrencies>(CURRENCIES)

  if (loading) {
    return <Spin indicator={<LoadingOutlined style={{ fontSize: 23 }} spin />} />
  }

  if (error) return <div>loading error</div>

  return (
    <div className={classes.currencies}>
      {data.currencies
        .filter((i) => i.code !== "UAH")
        .map((el) => (
          <Title key={el.code} level={4} className={classes.currency_item}>{`${
            el.symbol
          }${parseFloat(el.historyCourseInUAH[0].price.toFixed(2))}`}</Title>
        ))}
    </div>
  )
}
