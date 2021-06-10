import classes from "./style.module.scss"
import { IMonobankUserData } from "@/api/banks/monobank/getUserInfo"
import { BankCardGray } from "@/components/cards"
import { Row, Typography } from "antd"
import React, { ReactElement } from "react"
import ButtonSaveMonobankCard from "../ButtonSaveMonobankCard"

interface Props {
  data: IMonobankUserData
  token: string
  onClose: Function
}

export default function AddMonobankCardData(props: Props): ReactElement {
  const { data, token,onClose } = props
  const { Text } = Typography

  if (!data) return null

  return (
    <div className={classes.card_data}>
      <Row>
        <Text strong>Користувач:</Text>
        <Text className={classes.user_name}>{data.user.name}</Text>
      </Row>
      <Row className={classes.cards_title}>
        <Text strong>Рахунки:</Text>
      </Row>
      <Row className={classes.cards_row}>
        {data.bankCards.map((el) => (
          <BankCardGray key={el.id} className={classes.card_item} data={el} />
        ))}
      </Row>
      <Row>
        <ButtonSaveMonobankCard token={token} onClose={onClose} data={data} />
      </Row>
    </div>
  )
}
