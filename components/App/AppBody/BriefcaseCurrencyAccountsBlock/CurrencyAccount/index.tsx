import { txt } from "@/utils"
import React, { ReactElement } from "react"
import { ICurrencyAccountsData } from "../interfaces"
import CurrencyAccountGraph from "./CurrencyAccountGraph"
import CurrencyAccountTitle from "./CurrencyAccountTitle"
import classes from "./style.module.scss"

interface Props {
  data: ICurrencyAccountsData
  className?: string
}

export default function CurrencyAccount({ data, className }: Props): ReactElement {
  return (
    <div className={txt.join([className, classes.body])}>
      <CurrencyAccountTitle name={data.name}  currency={data.currency} />
      <CurrencyAccountGraph data={[...data.history].reverse()} currency={data.currency} />
    </div>
  )
}
