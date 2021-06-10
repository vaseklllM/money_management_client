import React, { ReactElement } from "react"
import { Layout } from "antd"
import BriefcaseMonobankBlock from "./BriefcaseMonobankBlock"
import BriefcaseCurrencyAccountsBlock from "./BriefcaseCurrencyAccountsBlock"
import classes from "./style.module.scss"
import BriefcaseAllBalance from "./BriefcaseAllBalance"

const { Content } = Layout

export default function AppBody(): ReactElement {
  return (
    <Content className={classes.body}>
      <BriefcaseAllBalance />
      <BriefcaseMonobankBlock />
      <BriefcaseCurrencyAccountsBlock />
    </Content>
  )
}
