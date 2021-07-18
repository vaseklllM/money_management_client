import { Table, Tag } from "antd"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"
import { date } from "@/utils"
import { IPagination } from "@/interfaces"
import { CURRENCY_ACCOUNT } from "./currencyAccount.gql"
import { useLazyQuery } from "@apollo/client"
import { configCurrencyAccounts } from "../../config"
import DeleteHistoryItem from "./DeleteHistoryItem"
import {
  ICurrencyAccountDataHistory,
  ICurrencyAccountDataCurrency,
  ICurrencyAccountData as IData,
} from "@/pages/currencies/currencyAccounts.gql"
import { P14 } from "@/components/Typography"

interface Props {
  data: ICurrencyAccountDataHistory[]
  currency: ICurrencyAccountDataCurrency
  pagination: IPagination
  currencyAccountId: string
  numberOfHistoryItems: number
  page: number
}

interface ITableData {
  title: string
  date: Date
  value: number
  currencyCode: string
}

interface ICurrencyAccountVariables {
  currencyAccountId: string
  numberOfHistoryItems: number
  historyPage: number
}

interface ICurrencyAccountData {
  currencyAccount: IData
}

export default function ItemHistory(props: Props): ReactElement {
  const { currency, currencyAccountId, data, pagination, numberOfHistoryItems, page } =
    props

  const [getCurrencyAccount, { loading }] = useLazyQuery<
    ICurrencyAccountData,
    ICurrencyAccountVariables
  >(CURRENCY_ACCOUNT, { fetchPolicy: "cache-and-network" })

  const columns = [
    {
      title: "Назва",
      dataIndex: "title",
      key: "title",
      width: "20%",
    },
    {
      title: "Дата",
      dataIndex: "date",
      key: "date",
      maxContent: true,
      render: (value) => (
        <div className={classes.date}>{date.convertToShowFullFormat(value)}</div>
      ),
    },
    {
      title: "Сумма операції",
      dataIndex: "value",
      key: "value",
      render: (value: number, el: ITableData) => {
        const numberFormat = new Intl.NumberFormat("ru-RU", {
          style: "currency",
          currency: el.currencyCode,
        })
        const num = numberFormat.format(value)

        return num
      },
    },
    {
      title: "Сумма рахунку",
      dataIndex: "currencyAccountValue",
      key: "currencyAccountValue",
      render: (value: number, el: ITableData) => {
        const numberFormat = new Intl.NumberFormat("ru-RU", {
          style: "currency",
          currency: el.currencyCode,
        })
        const num = numberFormat.format(value)

        return num
      },
    },
    {
      title: "Тип",
      render: (_, el: ITableData) => {
        if (el.value === 0) return "-"

        let color = el.value > 0 ? "green" : "volcano"
        const tag = el.value > 0 ? "Покупка" : "Продажа"

        return (
          <Tag color={color} key={tag}>
            {tag}
          </Tag>
        )
      },
      width: "15%",
    },
    {
      title: "Дія",
      render: (_, el) => {
        return (
          <DeleteHistoryItem
            id={el.key}
            disabled={numberOfHistoryItems === 1}
            page={page}
          />
        )
      },
      width: "8%",
    },
  ]

  function changePagination(historyPage) {
    getCurrencyAccount({
      variables: {
        historyPage,
        currencyAccountId,
        numberOfHistoryItems: configCurrencyAccounts.numberOfHistoryItems,
      },
    })
  }

  return (
    <div className={classes.body}>
      <P14>Історія операцій з рахунком</P14>
      <Table
        columns={columns}
        dataSource={data.map((el) => ({
          title: el.title,
          key: el.id,
          date: el.date,
          currencyCode: currency.code,
          value: el.value,
          currencyAccountValue: el.currencyAccountValue,
        }))}
        pagination={
          pagination.numberOfPages > 1 && {
            total: pagination.amountOfElements,
            current: pagination.page,
            onChange: changePagination,
            pageSize: pagination.amountOfElementsByPage,
            position: ["bottomLeft"],
          }
        }
        className={classes.table}
        loading={loading}
      />
    </div>
  )
}
