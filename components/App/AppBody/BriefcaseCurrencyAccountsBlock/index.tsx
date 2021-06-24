import ContentBlock from "@/components/finance/ContentBlock"
import { useQuery } from "@apollo/client"
import React, { ReactElement } from "react"
import BriefcaseCurrencyAccountsBlockTitleRow from "./BriefcaseCurrencyAccountsBlockTitleRow"
import CurrencyAccount from "./CurrencyAccount"
import { ICurrencyAccountsQueryData } from "./interfaces"
import classes from "./style.module.scss"
import CURRENCY_ACCOUNTS from "../../currencyAccounts.gql"

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
    // fetchPolicy: "cache-and-network",
  })

  if (loading || !data) return null

  const isData = data.currencyAccounts.length !== 0

  return (
    <ContentBlock>
      <BriefcaseCurrencyAccountsBlockTitleRow isNotData={!isData} />
      {isData && (
        <div className={classes.graphs}>
          {data.currencyAccounts.map((el) => (
            <CurrencyAccount className={classes.item} data={el} key={el.id} />
          ))}
        </div>
      )}
    </ContentBlock>
  )
}
