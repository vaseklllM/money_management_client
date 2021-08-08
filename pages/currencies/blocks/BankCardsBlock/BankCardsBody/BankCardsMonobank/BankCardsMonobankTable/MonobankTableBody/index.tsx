import { Span14 } from "@/components/Typography"
import React, { Fragment, ReactElement } from "react"
import { ICars } from "../../../../interfaces"
import classes from "./style.module.scss"
import TableBodyBalance from "./TableBodyBalance"

interface Props {
  data: ICars[]
}

export default function MonobankTableBody({ data }: Props): ReactElement {
  return (
    <div className={classes.body}>
      {data.map((item, idx) => {
        return (
          <Fragment key={idx}>
            <Span14 className={classes.item}>{item.cardNumber || "-"}</Span14>
            <TableBodyBalance
              className={classes.item}
              balance={item.balance}
              currencyCode={item.currency.code}
            />
            <Span14 className={classes.item}>{item.currency.code}</Span14>
            <Span14 className={classes.item}>{item.iban}</Span14>
          </Fragment>
        )
      })}
    </div>
  )
}
