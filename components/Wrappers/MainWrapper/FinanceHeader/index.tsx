import { ReactElement } from "react"
import { PageHeader } from "antd"
import classes from "./style.module.scss"
import FinanceHeaderTitle from "./FinanceHeaderTitle"
import LogoutButton from "./LogoutButton"

export default function FinanceHeader(): ReactElement {
  return (
    <PageHeader
      className={classes.header}
      title={<FinanceHeaderTitle />}
      extra={<LogoutButton />}
    ></PageHeader>
  )
}
