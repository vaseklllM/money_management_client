import { txt } from "@/utils"
import Link from "next/link"
import React, { MouseEventHandler, ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  children: string | number
  to?: string
  openNewTab?: boolean
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  loading?: boolean
}

export default function ButtonBlueWrapper({
  children,
  to,
  openNewTab,
  className,
  onClick,
  loading,
}: Props): ReactElement {
  if (typeof to === "string" && to !== "") {
    return (
      <Link href={to}>
        <a
          onClick={onClick}
          target={openNewTab ? "_blank" : "_parent"}
          className={txt.join([className, classes.body, classes.link])}
        >
          {children}
        </a>
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      className={txt.join([classes.button, classes.body, className])}
    >
      {children}
    </button>
  )
}
