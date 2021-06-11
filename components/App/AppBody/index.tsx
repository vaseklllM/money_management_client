import React, { ReactElement } from "react"
import { Layout } from "antd"
import BriefcaseMonobankBlock from "./BriefcaseMonobankBlock"
import BriefcaseCurrencyAccountsBlock from "./BriefcaseCurrencyAccountsBlock"
import classes from "./style.module.scss"
import BriefcaseAllBalance from "./BriefcaseAllBalance"
import BriefcaseRatioBlock from "./BriefcaseRatioBlock"

const { Content } = Layout

export default function AppBody(): ReactElement {
  return (
    <Content className={classes.body}>
      <BriefcaseAllBalance />
      <BriefcaseRatioBlock/>
      <BriefcaseMonobankBlock />
      <BriefcaseCurrencyAccountsBlock />
    </Content>
  )
}
