import ContentBlock from "@/components/finance/ContentBlock"
import React, { ReactElement } from "react"
import CurrencyAccountsTitleRow from "./CurrencyAccountsTitleRow"
import { useQuery } from "@apollo/client"
import { configCurrencyAccounts } from "./config"
import {
  CURRENCY_ACCOUNTS,
  ICurrencyAccountsData,
  ICurrencyAccountsVariables,
} from "../../currencyAccounts.gql"
import CurrencyAccountItem from "./CurrencyAccountItem"
import classes from "./style.module.scss"

export default function CurrencyAccounts(): ReactElement {
  const { loading, data } = useQuery<ICurrencyAccountsData, ICurrencyAccountsVariables>(
    CURRENCY_ACCOUNTS,
    {
      variables: {
        numberOfHistoryItems: configCurrencyAccounts.numberOfHistoryItems,
      },
    }
  )

  if (loading || !data || data.currencyAccounts.length === 0) return null

  return (
    <ContentBlock>
      <CurrencyAccountsTitleRow />
      {data.currencyAccounts.map((i) => (
        <CurrencyAccountItem className={classes.item} data={i} key={i.id} />
      ))}
    </ContentBlock>
  )
}
