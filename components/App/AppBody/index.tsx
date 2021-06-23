import React, { ReactElement } from "react"
import { Layout } from "antd"
import BriefcaseMonobankBlock from "./BriefcaseMonobankBlock"
import BriefcaseCurrencyAccountsBlock from "./BriefcaseCurrencyAccountsBlock"
import classes from "./style.module.scss"
import BriefcaseAllBalance from "./BriefcaseAllBalance"
import BriefcaseRatioBlock from "./BriefcaseRatioBlock"
import ExchangeRatesBlock from "./ExchangeRatesBlock"
import Link from "next/link"

const { Content } = Layout

export default function AppBody(): ReactElement {
  return (
    <Content className={classes.body}>
      <Link href='/post'>
        <a>post</a>
      </Link>
      <BriefcaseAllBalance />
      {/* <BriefcaseRatioBlock />*/}
      {/* <BriefcaseMonobankBlock /> */}
      <BriefcaseCurrencyAccountsBlock />
      {/* <ExchangeRatesBlock /> */}
    </Content>
  )
}
