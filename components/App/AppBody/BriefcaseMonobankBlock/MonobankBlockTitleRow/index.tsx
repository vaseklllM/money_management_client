import { Typography } from "antd"
import React, { ReactElement } from "react"
import { IBankCardsUser } from "../interfaces"
import classes from "./style.module.scss"

interface Props {
  user: IBankCardsUser
}

export default function MonobankBlockTitleRow({ user }: Props): ReactElement {
  const { Title, Text } = Typography
  return (
    <div className={classes.body}>
      <Title className={classes.title} level={5}>
        Статистика монобанка
      </Title>
      <Text className={classes.subtitle} type='secondary'>
        Власник: {user.lastName} {user.firstName}
      </Text>
    </div>
  )
}
