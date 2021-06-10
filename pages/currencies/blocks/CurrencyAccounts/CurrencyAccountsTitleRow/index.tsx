import { ReactElement } from "react"
import { Typography } from "antd"

interface Props {}

export default function CurrencyAccountsTitleRow({}: Props): ReactElement {
  const { Title, Text } = Typography
  return (
    <div>
      <Title level={5}>Валютні рахунки</Title>
      <Text type='secondary'>Список рахунків створених користувачем.</Text>
    </div>
  )
}
