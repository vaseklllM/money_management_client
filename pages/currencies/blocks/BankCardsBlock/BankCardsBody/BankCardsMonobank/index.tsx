import classes from "./style.module.scss"
import { Col, Typography } from "antd"
import React, { ReactElement } from "react"
import { IBankCardsMonobankData } from "../../interfaces"
import BankCardsMonobankTable from "./BankCardsMonobankTable"

interface Props {
  data?: IBankCardsMonobankData
}

export default function BankCardsMonobank(props: Props): ReactElement {
  const { data } = props
  const { Title, Text } = Typography

  if (!data) return null

  return (
    <Col className={classes.body}>
      <Title level={5}>Монобанк</Title>
      <Text type='secondary'>Власник:&nbsp;&nbsp;</Text>
      <Text>
        {data.user.lastName} {data.user.firstName}
      </Text>
      <BankCardsMonobankTable data={data.historyCards[0].cards} />
    </Col>
  )
}
