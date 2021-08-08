import { Span14 } from "@/components/Typography"
import { ICurrencyAccountDataHistory } from "@/pages/currencies/currencyAccounts.gql"
import { date } from "@/utils"
import React, { Fragment, ReactElement } from "react"
import DeleteHistoryItem from "../DeleteHistoryItem"
import classes from "./style.module.scss"
import TableBodyOperationType from "./TableBodyOperationType"
import TableBodyPrice from "./TableBodyPrice"

interface Props {
  data: ICurrencyAccountDataHistory[]
  currencyCode: string
  numberOfHistoryItems: number
  page: number
}

export default function CurrencyAccountTableBody({
  data,
  currencyCode,
  numberOfHistoryItems,
  page,
}: Props): ReactElement {
  return (
    <div className={classes.body}>
      {data.map((item) => {
        return (
          <Fragment key={item.id}>
            <Span14 className={classes.item}>{item.title}</Span14>
            <Span14 className={classes.item}>
              {date.convertToShowFullFormat(item.date)}
            </Span14>
            <TableBodyPrice
              className={classes.item}
              value={item.value}
              currencyCode={currencyCode}
            />
            <TableBodyPrice
              className={classes.item}
              value={item.currencyAccountValue}
              currencyCode={currencyCode}
            />
            <TableBodyOperationType className={classes.item} value={item.value} />
            <DeleteHistoryItem
              id={item.id}
              disabled={numberOfHistoryItems === 1}
              page={page}
              className={classes.item}
            />
          </Fragment>
        )
      })}
    </div>
  )
}
