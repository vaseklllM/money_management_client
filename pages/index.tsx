import App from "@/components/App"
import { initializeApollo } from "@/providers/Apollo/apolloClient"
import { GetServerSideProps } from "next"
import getConfig from "next/config"
import CURRENCY_ACCOUNTS from "@/components/App/currencyAccounts.gql"
import { BANK_CARDS } from "@/components/App/bankCards.gql"
import CURRENCIES from "@/components/App/currencies.gql"
import SETTINGS from "@/components/Wrappers/MainWrapper/settings.gql"

const { serverRuntimeConfig } = getConfig()

export default function Home() {
  return <App />
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  serverRuntimeConfig.token = req.cookies.token

  const apolloClient = initializeApollo()

  /** side menu */
  await apolloClient.query({
    query: SETTINGS,
  })

  /** Вартість всіх рахунків / Статистика монобанка */
  await apolloClient.query({
    query: BANK_CARDS,
  })

  /** Вартість всіх рахунків / Співвідношення валют */
  await apolloClient.query({
    query: CURRENCY_ACCOUNTS,
    variables: {
      numberOfHistoryItems: 0,
    },
  })

  /** Валютні рахунки */
  await apolloClient.query({
    query: CURRENCY_ACCOUNTS,
    variables: {
      numberOfHistoryItems: 15,
    },
    // fetchPolicy: "cache-and-network",
  })

  /** Курс валют */
  await apolloClient.query({
    query: CURRENCIES,
    variables: {
      numberOfHistoryItems: 30,
    },
  })

  /** Курс валют в хедері */
  await apolloClient.query({
    query: CURRENCIES,
    variables: {
      numberOfHistoryItems: 0,
    },
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}
