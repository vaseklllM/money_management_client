import classes from "./style.module.scss"
import { IMonobankUserData } from "@/api/banks/monobank/getUserInfo"
import { BankCardGray } from "@/components/cards"
import React, { ReactElement } from "react"
import ButtonSaveMonobankCard from "../ButtonSaveMonobankCard"
import { Span14, Span14bold } from "@/components/Typography"

interface Props {
  data: IMonobankUserData
  token: string
  onClose: Function
}

export default function AddMonobankCardData(props: Props): ReactElement {
  const { data, token, onClose } = props

  if (!data) return null

  return (
    <div className={classes.card_data}>
      <div className={classes.row}>
        <Span14bold>Користувач:</Span14bold>
        <Span14 className={classes.user_name}>{data.user.name}</Span14>
      </div>
      <Span14bold className={classes.cards_title}>Рахунки:</Span14bold>
      <div className={classes.cards_row}>
        {data.bankCards.map((el) => (
          <BankCardGray key={el.id} className={classes.card_item} data={el} />
        ))}
      </div>
      <ButtonSaveMonobankCard token={token} onClose={onClose} data={data} />
    </div>
  )
}
