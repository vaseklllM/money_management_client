import { P16, Span16 } from "@/components/Typography"
import { txt } from "@/utils"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

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
      <P16 className={classes.text}>
        {isSingUp ? "Вже зареєстровані" : "Немає аккаунта"}?&nbsp;
        <button
          className={classes.blue_link_btn}
          onClick={() => setIsSingUp((v: boolean) => !v)}
        >
          <Span16 className={classes.blue_link_text}>
            {isSingUp ? "Ввійти" : "Зареєструватися"}
          </Span16>
        </button>
      </P16>
    </div>
  )
}
