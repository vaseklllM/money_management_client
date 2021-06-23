import App from "@/components/App"
import { initializeApollo } from "@/providers/Apollo/apolloClient"
import { GetServerSideProps } from "next"
import getConfig from "next/config"
// import BANK_CARDS from "@/components/App/AppBody/BriefcaseAllBalance/FullPrice/bankcards.gql"
// import BANC_CARDS1 from "@/components/App/AppBody/BriefcaseMonobankBlock/bankCards.gql"
import CURRENCY_ACCOUNTS from "@/components/App/currencyAccounts.gql"
import BANK_CARDS from "@/components/App/bankCards.gql"
import CURRENCIES from "@/components/App/currencies.gql"

const { serverRuntimeConfig } = getConfig()

export default function Home() {
  return <App />
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  serverRuntimeConfig.token = req.cookies.token

  const apolloClient = initializeApollo()

  /** Вартість всіх рахунків / Статистика монобанка */
  await apolloClient.query({
    query: BANK_CARDS,
  })

  /** Вартість всіх рахунків */
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

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}
