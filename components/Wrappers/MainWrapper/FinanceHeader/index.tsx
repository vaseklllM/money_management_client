import { ReactElement } from "react"
import { PageHeader } from "antd"
import classes from "./style.module.scss"
import FinanceHeaderTitle from "./FinanceHeaderTitle"
import LogoutButton from "./LogoutButton"
import { txt } from "@/utils"

interface Props {
  className?: string
}

export default function FinanceHeader({ className }: Props): ReactElement {
  return (
    <div className={txt.join([classes.header, className])}>
      <FinanceHeaderTitle className={classes.currencies} />
      <LogoutButton className={classes.logout} />
    </div>
  )
  // return (
  //   <PageHeader
  //     className={classes.header}
  //     title={<FinanceHeaderTitle />}
  //     extra={<LogoutButton />}
  //   ></PageHeader>
  // )
}
