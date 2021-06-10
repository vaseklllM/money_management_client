import { txt } from "@/utils"
import { Typography } from "antd"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

const { Text } = Typography

interface Props {
  className?: string
  isSingUp: boolean
  setIsSingUp: Function
}

export default function AuthAdaptiveDownButtons({
  className,
  isSingUp,
  setIsSingUp,
}: Props): ReactElement {
  return (
    <div className={txt.join([className, classes.body])}>
      <Text className={classes.text}>
        {isSingUp ? "Вже зареєстровані" : "Немає аккаунта"}?&nbsp;
        <button
          className={classes.blue_link_btn}
          onClick={() => setIsSingUp((v: boolean) => !v)}
        >
          <Text className={classes.blue_link_text}>
            {isSingUp ? "Ввійти" : "Зареєструватися"}
          </Text>
        </button>
      </Text>
    </div>
  )
}
