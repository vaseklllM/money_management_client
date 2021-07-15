import { Span14, Span14bold } from "@/components/Typography"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  isNotData: boolean
}

export default function BriefcaseCurrencyAccountsBlockTitleRow({
  isNotData,
}: Props): ReactElement {
  return (
    <div className={classes.body}>
      <Span14bold className={classes.title}>Валютні рахунки</Span14bold>
      {isNotData && (
        <Span14 className={classes.not_currency_accounts}>
          В вас немає рахунків. Створіть новий рахунок для відображення статистики.
        </Span14>
      )}
    </div>
  )
}
