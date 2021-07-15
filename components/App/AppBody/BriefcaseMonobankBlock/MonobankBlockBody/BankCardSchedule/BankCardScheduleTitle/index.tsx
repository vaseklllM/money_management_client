import { P14, Span14 } from "@/components/Typography"
import React, { ReactElement } from "react"
import { IBankCardItem } from "../../../interfaces"
import classes from "./style.module.scss"

interface Props {
  data: IBankCardItem
}

export default function BankCardScheduleTitle({ data }: Props): ReactElement {
  return (
    <div className={classes.body}>
      <P14 className={classes.fs_12}>
        Валюта: <Span14>{data.currency.code}</Span14>
      </P14>
      <P14 className={classes.fs_12}>
        Номер картки: <Span14>{data.cardNumber || "-"}</Span14>
      </P14>
      <P14 className={classes.fs_12}>
        iban: <Span14>{data.iban}</Span14>
      </P14>
    </div>
  )
}
