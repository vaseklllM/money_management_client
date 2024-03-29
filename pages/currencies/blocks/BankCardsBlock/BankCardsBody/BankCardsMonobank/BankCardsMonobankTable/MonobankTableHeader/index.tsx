import { Span14bold } from "@/components/Typography"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {}

export default function MonobankTableHeader({}: Props): ReactElement {
  const tabs: string[] = ["Номер карти", "Баланс", "Код валюти", "iban"]

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
