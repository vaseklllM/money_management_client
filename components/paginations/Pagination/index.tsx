import React, { ReactElement, useState } from "react"
import RcPagination from "rc-pagination"
import classes from "./style.module.scss"
import { txt } from "@/utils"
import { ReactSVG } from "react-svg"

interface Props {
  className?: string
  numberOfPages: number
  onChange: (e: number) => void
  page: number
}

export default function Pagination({
  className,
  numberOfPages,
  onChange,
  page,
}: Props): ReactElement {
  return (
    <RcPagination
      className={txt.join([className, classes.pagination])}
      onChange={onChange}
      current={page}
      total={numberOfPages}
      pageSize={1}
      prevIcon={
        <button className={classes.prev_button}>
          <ReactSVG className={classes.icon} src='icons/arrow.svg' />
        </button>
      }
      nextIcon={
        <button className={classes.next_button}>
          <ReactSVG className={classes.icon} src='icons/arrow.svg' />
        </button>
      }
    />
  )
}
