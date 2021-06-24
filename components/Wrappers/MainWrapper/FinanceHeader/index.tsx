import { ReactElement, useEffect, useState } from "react"
// import { PageHeader } from "antd"
import classes from "./style.module.scss"
import FinanceHeaderTitle from "./FinanceHeaderTitle"
import LogoutButton from "./LogoutButton"
import { txt } from "@/utils"

interface Props {
  className?: string
}

export default function Header({ className }: Props): ReactElement {
  const [fixed, setFixed] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  function handleScroll() {
    setFixed(window.scrollY > 16)
  }

  return (
    <div className={txt.join([className, classes.header_wrapper])}>
      <div
        className={txt.join([classes.header, fixed && classes.fixed_header, className])}
      >
        <FinanceHeaderTitle className={classes.currencies} />
        <LogoutButton className={classes.logout} />
      </div>
    </div>
  )
  // return (
  //   <PageHeader
  //     className={classes.header}
  //     title={<FinanceHeaderTitle />}
  //     extra={<LogoutButton />}
  //   ></PageHeader>
  // )
}
