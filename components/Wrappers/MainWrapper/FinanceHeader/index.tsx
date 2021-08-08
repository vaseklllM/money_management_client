import { ReactElement, useEffect, useState } from "react"
import classes from "./style.module.scss"
import FinanceHeaderTitle from "./FinanceHeaderTitle"
import LogoutButton from "./LogoutButton"
import { txt } from "@/utils"

interface Props {
  className?: string
}

export default function Header({ className }: Props): ReactElement {
  const [scrollY, setScrollY] = useState<number>(0)
  const [fixed, setFixed] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  function handleScroll() {
    setFixed(window.scrollY > 16)
    if (window.scrollY <= 16) setScrollY(window.scrollY)
  }

  return (
    <div className={txt.join([className, classes.header_wrapper])}>
      <div
        className={txt.join([classes.header, fixed && classes.fixed_header, className])}
        style={{ top: fixed ? 0 : `${16 - scrollY}px` }}
      >
        <FinanceHeaderTitle className={classes.currencies} />
        <LogoutButton className={classes.logout} />
      </div>
    </div>
  )
}
