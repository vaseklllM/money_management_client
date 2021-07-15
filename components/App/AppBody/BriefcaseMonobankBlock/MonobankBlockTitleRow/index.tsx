import { P14, Span14bold } from "@/components/Typography"
import React, { ReactElement } from "react"
import { IBankCardsUser } from "../interfaces"
import classes from "./style.module.scss"

interface Props {
  user: IBankCardsUser
}

export default function MonobankBlockTitleRow({ user }: Props): ReactElement {
  return (
    <div className={classes.body}>
      <Span14bold className={classes.title}>Статистика монобанка</Span14bold>
      <P14 className={classes.subtitle}>
        Власник: {user.lastName} {user.firstName}
      </P14>
    </div>
  )
}
