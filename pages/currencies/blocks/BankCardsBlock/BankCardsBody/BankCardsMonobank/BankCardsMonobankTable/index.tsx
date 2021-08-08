import { Span14bold } from "@/components/Typography"
import { Table } from "antd"
import React, { ReactElement } from "react"
import { ICars } from "../../../interfaces"
import MonobankTableHeader from "./MonobankTableHeader"
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
          <Span14bold className={balance > 0 ? classes.green : classes.red}>
            {num}
          </Span14bold>
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
    <>
      <div className={classes.table}>
        <MonobankTableHeader />
      </div>
      <Table
        className={classes.prev_table}
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        size='middle'
      />
    </>
  )
}
