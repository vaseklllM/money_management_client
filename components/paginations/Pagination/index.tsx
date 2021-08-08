import React, { ReactElement, useState } from "react"
import RcPagination from "rc-pagination"
import classes from "./style.module.scss"
import { txt } from "@/utils"

interface Props {
  className?: string
}

export default function Pagination({ className }: Props): ReactElement {
  const [page, setPage] = useState(2)

  function onChange(e) {
    setPage(e)
  }
  return (
    <RcPagination
      className={txt.join([classes.pagination, className])}
      onChange={onChange}
      current={page}
      total={3000}
      pageSize={1}
    />
  )
}
