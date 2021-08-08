import { Pagination } from "@/components/paginations"
import { IPagination } from "@/interfaces"
import { ICurrencyAccountData } from "@/pages/currencies/currencyAccounts.gql"
import { useLazyQuery } from "@apollo/client"
import React, { ReactElement } from "react"
import { configCurrencyAccounts } from "../../../config"
import { CURRENCY_ACCOUNT } from "../currencyAccount.gql"
import classes from "./style.module.scss"

interface Props {
  pagination: IPagination
  currencyAccountId: string
}

interface ICurrencyAccountVariables {
  currencyAccountId: string
  numberOfHistoryItems: number
  historyPage: number
}

export default function CurrencyAccountTablePagination({
  pagination,
  currencyAccountId,
}: Props): ReactElement {
  const [getCurrencyAccount] = useLazyQuery<
    ICurrencyAccountData,
    ICurrencyAccountVariables
  >(CURRENCY_ACCOUNT, { fetchPolicy: "cache-and-network" })

  function onChange(historyPage) {
    getCurrencyAccount({
      variables: {
        historyPage,
        currencyAccountId,
        numberOfHistoryItems: configCurrencyAccounts.numberOfHistoryItems,
      },
    })
  }

  return (
    <Pagination
      className={classes.pagination}
      numberOfPages={pagination.numberOfPages}
      page={pagination.page}
      onChange={onChange}
    />
  )
}
