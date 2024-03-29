import { MainWrapper } from "@/components/Wrappers"
import { ReactElement } from "react"
import ConnectedBankCardBlock from "./blocks/ConnectedBankCardBlock"
import BankCardsBlock from "./blocks/BankCardsBlock"
import CurrencyAccounts from "./blocks/CurrencyAccounts"
import { GetServerSideProps } from "next"
import { initializeApollo } from "@/providers/Apollo/apolloClient"
import getConfig from "next/config"
import { CURRENCIES } from "@/components/Wrappers/MainWrapper/currencies.gql"
import { configCurrencyAccounts } from "./blocks/CurrencyAccounts/config"
import { SETTINGS } from "@/components/Wrappers/MainWrapper/settings.gql"
import { BANK_CARDS } from "./bankCards.gql"
import { CURRENCY_ACCOUNTS } from "./currencyAccounts.gql"

const { serverRuntimeConfig } = getConfig()

export default function Currencies(): ReactElement {
  return (
    <MainWrapper>
      <CurrencyAccounts />
      <ConnectedBankCardBlock />
      <BankCardsBlock />
    </MainWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  serverRuntimeConfig.token = req.cookies.token

  const apolloClient = initializeApollo()

  /** side menu */
  await apolloClient.query({
    query: SETTINGS,
  })

  /** Курс валют в хедері */
  await apolloClient.query({
    query: CURRENCIES,
    variables: {
      numberOfHistoryItems: 0,
    },
  })

  /** Підключення банківських карт "Монобанк" */
  await apolloClient.query({
    query: BANK_CARDS,
  })

  /** Валютні рахунки */
  await apolloClient.query({
    query: CURRENCY_ACCOUNTS,
    variables: {
      numberOfHistoryItems: configCurrencyAccounts.numberOfHistoryItems,
    },
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}
