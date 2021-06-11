import { MainWrapper } from "@/components/Wrappers"
import { ReactElement } from "react"
import { Layout } from "antd"
import ConnectedBankCardBlock from "./blocks/ConnectedBankCardBlock"
import BankCardsBlock from "./blocks/BankCardsBlock"
import CurrencyAccounts from "./blocks/CurrencyAccounts"
import classes from "./style.module.scss"
import Link from "next/link"
// import { addApolloState, initializeApollo } from "@/providers/Apollo/apolloClient"
// import BANK_CARDS from "./blocks/BankCardsBlock/bankCards.gql"

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

// export async function getStaticProps() {
//   const apolloClient = initializeApollo()

//   const { data, loading } = await apolloClient.query({
//     query: BANK_CARDS,
//   })

//   console.log(data, loading)

//   return addApolloState(apolloClient, {
//     props: {},
//   })
// }
