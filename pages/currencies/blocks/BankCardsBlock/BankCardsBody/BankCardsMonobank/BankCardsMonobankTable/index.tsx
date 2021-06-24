import { Table, Typography } from "antd"
import React, { ReactElement } from "react"
import { ICars } from "../../../interfaces"
import classes from "./style.module.scss"

interface Props {
  data: ICars[]
}

interface ITableData {
  key: string | number
  cardNumber: string
  balance: number
  currencyKey: string
  iban: string
}

export default function BankCardsMonobankTable(props: Props): ReactElement {
  const { Text } = Typography

  const data: ITableData[] = props.data.map((card, idx) => ({
    balance: card.balance,
    cardNumber: card.cardNumber || "-",
    currencyKey: card.currency.code,
    key: idx,
    iban: card.iban,
  }))

  const columns = [
    {
      title: "Номер карти",
      dataIndex: "cardNumber",
      key: "cardNumber",
    },
    {
      title: "Баланс",
      dataIndex: "balance",
      key: "balance",
      align: "right",
      render: (balance: number, obj: ITableData) => {
        const numberFormat = new Intl.NumberFormat("ru-RU", {
          style: "currency",
          currency: obj.currencyKey,
          currencyDisplay: "narrowSymbol",
        })

        const num = numberFormat.format(balance)

        if (balance === 0) return num

        return (
          <Text type={balance > 0 ? "success" : "danger"} strong>
            {num}
          </Text>
        )
      },
    },
    {
      title: "Код валюти",
      dataIndex: "currencyKey",
      key: "currencyKey",
      align: "center",
    },
    {
      title: "iban",
      dataIndex: "iban",
      key: "iban",
      align: "right",
    },
  ]

  return (
    <Table
      className={classes.table}
      columns={columns}
      dataSource={data}
      pagination={false}
      bordered
      size='middle'
    />
  )
}
