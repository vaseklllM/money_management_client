import { Typography } from "antd"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  isNotData: boolean
}

export default function BriefcaseCurrencyAccountsBlockTitleRow({
  isNotData,
}: Props): ReactElement {
  const { Title, Text } = Typography

  return (
    <div>
      <Title level={5} className={classes.title}>
        Валютні рахунки
      </Title>
      {isNotData && (
        <Text>
          В вас немає рахунків. Створіть новий рахунок для відображення статистики.
        </Text>
      )}
    </div>
  )
}
