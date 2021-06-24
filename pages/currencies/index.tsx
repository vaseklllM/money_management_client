import { MainWrapper } from "@/components/Wrappers"
import { ReactElement } from "react"
import { Layout } from "antd"
import ConnectedBankCardBlock from "./blocks/ConnectedBankCardBlock"
import BankCardsBlock from "./blocks/BankCardsBlock"
import CurrencyAccounts from "./blocks/CurrencyAccounts"
import classes from "./style.module.scss"
import Link from "next/link"
import { GetServerSideProps } from "next"
import { initializeApollo } from "@/providers/Apollo/apolloClient"
import getConfig from "next/config"
import BANK_CARDS from "./bankCards.gql"
import { configCurrencyAccounts } from "./blocks/CurrencyAccounts/config"
import CURRENCY_ACCOUNTS from "./currencyAccounts.gql"

const { serverRuntimeConfig } = getConfig()

export default function Currencies(): ReactElement {
  const { Content } = Layout

  return (
    <MainWrapper>
      <Content className={classes.body}>
        <Link href='/post'>
          <a>post</a>
        </Link>
        <CurrencyAccounts />
        <ConnectedBankCardBlock />
        <BankCardsBlock />
      </Content>
    </MainWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  serverRuntimeConfig.token = req.cookies.token

  const apolloClient = initializeApollo()

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
