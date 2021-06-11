import { MainWrapper } from "@/components/Wrappers"
import { ReactElement } from "react"
import { Layout } from "antd"
import ConnectedBankCardBlock from "./blocks/ConnectedBankCardBlock"
import BankCardsBlock from "./blocks/BankCardsBlock"
import CurrencyAccounts from "./blocks/CurrencyAccounts"
import classes from "./style.module.scss"

export default function Currencies(): ReactElement {
  const { Content } = Layout

  return (
    <MainWrapper>
      <Content className={classes.body}>
        {/* <Link href='/post'>
          <a>post</a>
        </Link> */}
        <CurrencyAccounts />
        <ConnectedBankCardBlock />
        <BankCardsBlock />
      </Content>
    </MainWrapper>
  )
}
