import React, { ReactElement } from "react"
import { ICars } from "../../../interfaces"
import MonobankTableBody from "./MonobankTableBody"
import MonobankTableHeader from "./MonobankTableHeader"
import classes from "./style.module.scss"

interface Props {
  data: ICars[]
}

export default function BankCardsMonobankTable(props: Props): ReactElement {
  return (
    <div className={classes.table}>
      <MonobankTableHeader />
      <MonobankTableBody data={props.data} />
    </div>
  )
}
