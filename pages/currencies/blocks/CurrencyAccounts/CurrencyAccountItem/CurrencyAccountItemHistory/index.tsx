import React, { ReactElement } from "react"
import classes from "./style.module.scss"
import { IPagination } from "@/interfaces"
import {
  ICurrencyAccountDataHistory,
  ICurrencyAccountDataCurrency,
} from "@/pages/currencies/currencyAccounts.gql"
import { P14 } from "@/components/Typography"
import CurrencyAccountTableHeader from "./CurrencyAccountTableHeader"
import CurrencyAccountTableBody from "./CurrencyAccountTableBody"
import CurrencyAccountTablePagination from "./CurrencyAccountTablePagination"

interface Props {
  data: ICurrencyAccountDataHistory[]
  currency: ICurrencyAccountDataCurrency
  pagination: IPagination
  currencyAccountId: string
  numberOfHistoryItems: number
  page: number
}

export default function ItemHistory(props: Props): ReactElement {
  const { currency, currencyAccountId, data, pagination, numberOfHistoryItems, page } =
    props

  return (
    <div className={classes.body}>
      <P14>Історія операцій з рахунком</P14>
      <div className={classes.table}>
        <CurrencyAccountTableHeader />
        <CurrencyAccountTableBody
          data={data}
          currencyCode={currency.code}
          numberOfHistoryItems={numberOfHistoryItems}
          page={page}
        />
        <CurrencyAccountTablePagination
          pagination={pagination}
          currencyAccountId={currencyAccountId}
        />
      </div>
    </div>
  )
}
