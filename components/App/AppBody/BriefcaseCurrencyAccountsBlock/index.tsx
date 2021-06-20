import FinanceContentBlock from "@/components/finance/FinanceContentBlock"
import { useQuery } from "@apollo/client"
import React, { ReactElement } from "react"
import BriefcaseCurrencyAccountsBlockTitleRow from "./BriefcaseCurrencyAccountsBlockTitleRow"
import CurrencyAccount from "./CurrencyAccount"
import CURRENCY_ACCOUNTS from "./currencyAccounts.gql"
import { ICurrencyAccountsQueryData } from "./interfaces"
import classes from "./style.module.scss"

interface ICurrencyAccountVariables {
  numberOfHistoryItems: number
}

export default function BriefcaseCurrencyAccountsBlock(): ReactElement {
  const { data, loading } = useQuery<
    ICurrencyAccountsQueryData,
    ICurrencyAccountVariables
  >(CURRENCY_ACCOUNTS, {
    variables: {
      numberOfHistoryItems: 15,
    },
    fetchPolicy: "cache-and-network",
  })

  if (loading || !data) return null

  const isData = data.currencyAccounts.length !== 0

  return (
    <FinanceContentBlock>
      <BriefcaseCurrencyAccountsBlockTitleRow isNotData={!isData} />
      {isData && (
        <div className={classes.graphs}>
          {data.currencyAccounts.map((el) => (
            <CurrencyAccount className={classes.item} data={el} key={el.id} />
          ))}
        </div>
      )}
    </FinanceContentBlock>
  )
}
