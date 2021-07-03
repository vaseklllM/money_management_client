import { CircleLoader } from "@/components/Loaders"
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
  function click(event) {
    if (!loading) {
      onClick(event)
    }
  }

  if (typeof to === "string" && to !== "") {
    return (
      <Link href={to}>
        <a
          onClick={click}
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
      onClick={click}
      className={txt.join([
        classes.button,
        classes.body,
        className,
        loading && classes.loading_button,
      ])}
    >
      {loading && <CircleLoader className={classes.button_circle_loader} />}
      {children}
    </button>
  )
}
