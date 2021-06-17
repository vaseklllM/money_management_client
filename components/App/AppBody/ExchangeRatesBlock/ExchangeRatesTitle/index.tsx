import { Typography } from "antd"
import React, { ReactElement } from "react"

const { Title } = Typography

interface Props {}

export default function ExchangeRatesTitle({}: Props): ReactElement {
  return (
    <div>
      <Title level={5}>Курс валют</Title>
    </div>
  )
}
