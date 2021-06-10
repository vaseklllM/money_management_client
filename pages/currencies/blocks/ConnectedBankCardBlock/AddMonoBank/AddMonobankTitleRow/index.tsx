import classes from "./style.module.scss"
import { Button, Row, Typography } from "antd"
import React, { ReactElement } from "react"
import Link from "next/link"

interface Props {
  inputPlaceholder: string
}

export default function AddMonobankTitleRow(props: Props): ReactElement {
  const { inputPlaceholder } = props
  const { Text } = Typography

  const goMonoBtnText = "Получити токен"

  return (
    <>
      <Row>
        <Text>
          Для того щоб підключити банківську карту монобанку потрібно натиснути кнопку "
          {goMonoBtnText}" і авторизуватись. Далі після авторизації натисніть
          "Активувати", скопіюйте згенерований токен та вставте в поле "{inputPlaceholder}
          ".
        </Text>
      </Row>
      <Row>
        <Link href={{ pathname: "https://api.monobank.ua/" }} passHref>
          <Button className={classes.go_bank} target='_blank' type='primary'>
            {goMonoBtnText}
          </Button>
        </Link>
      </Row>
    </>
  )
}
