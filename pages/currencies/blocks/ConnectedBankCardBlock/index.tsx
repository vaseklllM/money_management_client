import React, { ReactElement } from "react"
import classes from "./style.module.scss"
import { Row, Typography } from "antd"
import AddMonobank from "./AddMonobank"
import ContentBlock from "@/components/finance/ContentBlock"

const { Title, Text } = Typography

export default function ConnectedBankCardBlock(): ReactElement {
  return (
    <ContentBlock>
      <Title level={5}>Підключення банківських карт</Title>
      <Text type='secondary'>
        Підключіть банківські карти для регулярного автоматичного перегляду змін на
        рахунках.
      </Text>
      <Row className={classes.bank_cards}>
        <AddMonobank className={classes.bank_card} />
      </Row>
    </ContentBlock>
  )
}
