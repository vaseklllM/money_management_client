import { txt } from "@/utils"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  children?: string | ReactElement | ReactElement[]
  to: string
}

export default function BottomMenuLink({ children, to }: Props): ReactElement {
  const router = useRouter()

  const isActive = router.pathname === to

  function onClick() {
    if (!isActive) router.push(to)
  }

  return (
    <button
      onClick={onClick}
      className={txt.join([classes.button, isActive && classes.active])}
    >
      {children}
    </button>
  )
}
