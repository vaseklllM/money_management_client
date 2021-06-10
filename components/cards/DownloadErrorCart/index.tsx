import classes from "./style.module.scss"
import React, { MouseEventHandler, ReactElement } from "react"
import { txt } from "@/utils"

interface Props {
  className?: string
  centered?: boolean
  title?: string
  subtitle?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function DownloadErrorCart(props: Props): ReactElement {
  const { className, centered, title = "Помилка", subtitle, onClick } = props

  return (
    <div className={txt.join([centered && classes.container_centered, className])}>
      <div className={classes.error_box}>
        <div className={classes.dot}></div>
        <div className={txt.join([classes.dot, classes.two])}></div>
        <div className={classes.face2}>
          <div className={classes.eye}></div>
          <div className={txt.join([classes.eye, classes.right])}></div>
          <div className={txt.join([classes.mouth, classes.sad])}></div>
        </div>
        <div className={txt.join([classes.shadow, classes.move])}></div>
        <div className={classes.message}>
          <h1 className={txt.join([classes.alert, classes.h1])}>{title}</h1>
          <p className={classes.p}>{subtitle}</p>
        </div>
        <button className={txt.join([classes.button])} onClick={onClick}>
          <h1 className={txt.join([classes.button_text])}>Попробувати знову</h1>
        </button>
      </div>
    </div>
  )
}
