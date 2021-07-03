import classes from "./style.module.scss"
import React, { ReactElement } from "react"
import { P14 } from "@/components/Typography"
import { ButtonBlue } from "@/components/Buttons"

interface Props {
  inputPlaceholder: string
}

export default function AddMonobankTitleRow(props: Props): ReactElement {
  const { inputPlaceholder } = props

  const goMonoBtnText = "Получити токен"

  return (
    <>
      <P14>
        Для того щоб підключити банківську карту монобанку потрібно натиснути кнопку "
        {goMonoBtnText}" і авторизуватись. Далі після авторизації натисніть "Активувати",
        скопіюйте згенерований токен та вставте в поле "{inputPlaceholder}
        ".
      </P14>
      <ButtonBlue openNewTab to='https://api.monobank.ua/' className={classes.button}>
        {goMonoBtnText}
      </ButtonBlue>
    </>
  )
}
