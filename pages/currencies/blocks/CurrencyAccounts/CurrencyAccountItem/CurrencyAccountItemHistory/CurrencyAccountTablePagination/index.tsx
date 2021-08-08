import { Pagination } from "@/components/paginations"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {}

export default function CurrencyAccountTablePagination({}: Props): ReactElement {
  return <Pagination className={classes.pagination} />
}
