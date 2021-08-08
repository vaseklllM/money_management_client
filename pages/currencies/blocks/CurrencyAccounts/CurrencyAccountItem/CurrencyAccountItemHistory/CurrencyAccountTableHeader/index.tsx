import { Span14bold } from "@/components/Typography"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {}

export default function CurrencyAccountTableHeader({}: Props): ReactElement {
  const tabs: string[] = [
    "Назва",
    "Дата",
    "Сумма операції",
    "Сумма рахунку",
    "Тип",
    "Дія",
  ]

  return (
    <div className={classes.body}>
      {tabs.map((tab, idx) => (
        <Span14bold key={idx} className={classes.item}>
          {tab}
        </Span14bold>
      ))}
    </div>
  )
}
