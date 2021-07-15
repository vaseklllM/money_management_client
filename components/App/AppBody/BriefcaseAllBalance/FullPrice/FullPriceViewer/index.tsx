import { H2, P12 } from "@/components/Typography"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  value: string
}

export default function FullPriceViewer({ value }: Props): ReactElement {
  return (
    <div className={classes.body}>
      <P12>Вартість всіх рахунків</P12>
      <H2 className={classes.value}>{value}</H2>
    </div>
  )
}
