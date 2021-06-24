import FinanceContentBlock from "@/components/finance/FinanceContentBlock"
import React, { ReactElement } from "react"
import CurrencyAccountsTitleRow from "./CurrencyAccountsTitleRow"
import CURRENCY_ACCOUNTS from "../../currencyAccounts.gql"
import { useQuery } from "@apollo/client"
import { ICurrencyAccountsData } from "./interface"
import CurrencyAccountsBody from "./CurrencyAccountsBody"
import { configCurrencyAccounts } from "./config"

interface ICurrencyAccountsVariables {
  numberOfHistoryItems: number
}

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
    <FinanceContentBlock>
      <CurrencyAccountsTitleRow />
      <CurrencyAccountsBody data={data.currencyAccounts} />
    </FinanceContentBlock>
  )
}
