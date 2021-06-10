import { ReactElement } from "react"
import { Typography } from "antd"

interface Props {
  isNotCards: boolean
}

export default function BankCardsTitleRow(props: Props): ReactElement {
  const { isNotCards } = props
  const { Title, Text } = Typography

  return (
    <>
      <Title level={5}>Банківські карти</Title>
      <Text type='secondary'>
        {isNotCards
          ? "У вас немає підключених банківських карт."
          : "Система регулярно автоматично оновлює данні з підключених банківських карт."}
      </Text>
    </>
  )
}
