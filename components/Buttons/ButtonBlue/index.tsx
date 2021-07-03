import { txt } from "@/utils"
import Link from "next/link"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  className?: string
  children: string | number
  to?: string
  openNewTab?: boolean
}

export default function ButtonBlue({
  className,
  children,
  to,
  openNewTab,
}: Props): ReactElement {
  if (typeof to === "string" && to !== "") {
    return (
      <Link href={to}>
        <a
          target={openNewTab ? "_blank" : "_parent"}
          className={txt.join([className, classes.link])}
        >
          {children}
        </a>
      </Link>
    )
  }

  return <button className={txt.join([className, classes.button])}>{children}</button>
}
