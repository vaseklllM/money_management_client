import { MainWrapper } from "@/components/Wrappers"
import { ReactElement } from "react"
import { Layout } from "antd"
import ConnectedBankCardBlock from "./blocks/ConnectedBankCardBlock"
import BankCardsBlock from "./blocks/BankCardsBlock"
import CurrencyAccounts from "./blocks/CurrencyAccounts"
import classes from "./style.module.scss"
import Link from "next/link"

export default function Currencies(props): ReactElement {
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

// Currencies.getInitialProps = async ({ req }) => {
//   if (!req) {
//     return { stars: null }
//   }

//   const res = await fetch("https://api.github.com/repos/vercel/next.js")
//   const json = await res.json()

//   return {
//     stars: json.stargazers_count,
//   }
// }

// export async function getStaticProps({ req }) {
//   // if (!req) {
//   //   return { props: { stars: null } }
//   // }

//   const res = await fetch("https://api.github.com/repos/vercel/next.js")
//   const json = await res.json()

//   // const { data } = await client.query({
//   //   query: CURRENCY_ACCOUNTS,
//   // })

//   // console.log(data)

//   return { props: { stars: json.stargazers_count } }
// }
