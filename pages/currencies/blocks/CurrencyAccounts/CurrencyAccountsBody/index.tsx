import React, { ReactElement } from "react"
import { ICurrencyAccountData } from "../interface"
import CurrencyAccountItem from "./CurrencyAccountItem"
import classes from "./style.module.scss"

interface Props {
  data: ICurrencyAccountData[]
}

export default function CurrencyAccountsBody({ data }: Props): ReactElement {
  return (
    <div>
      {data.map((i) => (
        <CurrencyAccountItem className={classes.item} data={i} key={i.id} />
      ))}
    </div>
  )
}
