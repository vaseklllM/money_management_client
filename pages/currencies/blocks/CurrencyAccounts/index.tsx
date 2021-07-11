import ContentBlock from "@/components/finance/ContentBlock"
import React, { ReactElement } from "react"
import CurrencyAccountsTitleRow from "./CurrencyAccountsTitleRow"
import { useQuery } from "@apollo/client"
import CurrencyAccountsBody from "./CurrencyAccountsBody"
import { configCurrencyAccounts } from "./config"
import {
  CURRENCY_ACCOUNTS,
  ICurrencyAccountsData,
  ICurrencyAccountsVariables,
} from "../../currencyAccounts.gql"

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
      <CurrencyAccountsBody data={data.currencyAccounts} />
    </ContentBlock>
  )
}
