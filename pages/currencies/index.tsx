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

const { serverRuntimeConfig } = getConfig()

export default function Currencies(): ReactElement {
  const { Content } = Layout

  return (
    <MainWrapper>
      <Content className={classes.body}>
        <Link href='/post'>
          <a>post</a>
        </Link>
        {/* <CurrencyAccounts /> */}
        <ConnectedBankCardBlock />
        {/* <BankCardsBlock /> */}
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

  // /** */
  // await apolloClient.query({
  //   query: CURRENCY_ACCOUNTS,
  //   variables: {
  //     numberOfHistoryItems: 0,
  //   },
  // })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}
