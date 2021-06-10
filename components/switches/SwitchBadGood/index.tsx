import { txt } from "@/utils"
import React, { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  badText?: string
  goodText?: string
  value?: boolean
  onChange?: (value: boolean) => any
  className?: string
}

export default function SwitchBadGood({
  badText = "BAD",
  goodText = "GOOD",
  value = false,
  onChange = () => {},
  className,
}: Props): ReactElement {
  return (
    <div className={txt.join([classes.body, value && classes.active_body, className])}>
      <div
        className={txt.join([classes.bad, classes.item])}
        onClick={() => onChange(false)}
      >
        {badText}
      </div>
      <div className={txt.join([classes.switch, classes.item])}>
        {value ? goodText : badText}
      </div>
      <div
        className={txt.join([classes.good, classes.item])}
        onClick={() => onChange(true)}
      >
        {goodText}
      </div>
    </div>
  )
}
