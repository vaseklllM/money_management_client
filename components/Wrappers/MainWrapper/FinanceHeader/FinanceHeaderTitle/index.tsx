import React, { memo, ReactElement } from "react"
import { LoadingOutlined } from "@ant-design/icons"
import { Spin } from "antd"
import { Typography } from "antd"
import classes from "./style.module.scss"
import CURRENCIES from "../../currencies.gql"
import { useQuery } from "@apollo/client"
import { txt } from "@/utils"

const { Title } = Typography
interface ICurrencies {
  currencies: {
    code: string
    symbol: string
    historyCourseInUAH: {
      price: number
    }[]
  }[]
}

interface ICurrenciesVariables {
  numberOfHistoryItems: number
}

interface Props {
  className?: string
}

export default memo(function FinanceHeaderTitle({ className }: Props): ReactElement {
  const { data, loading, error } = useQuery<ICurrencies, ICurrenciesVariables>(
    CURRENCIES,
    { variables: { numberOfHistoryItems: 0 } }
  )

  if (loading) {
    return <Spin indicator={<LoadingOutlined style={{ fontSize: 23 }} spin />} />
  }

  if (error) return <div>Помилка при завантажені даних</div>

  return (
    <div className={txt.join([classes.currencies, className])}>
      {data.currencies
        .filter((i) => i.code !== "UAH")
        .map((el) => (
          <Title key={el.code} level={4} className={classes.currency_item}>{`${
            el.symbol
          }${parseFloat(el.historyCourseInUAH[0].price.toFixed(2))}`}</Title>
        ))}
    </div>
  )
})
