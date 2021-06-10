import classes from "./style.module.scss"
import React, { ReactElement } from "react"
import Link from "next/link"

export default function Custom404(): ReactElement {
  return (
    <div className={classes.body}>
      <div className={classes.noise}></div>
      <div className={classes.overlay}></div>
      <div className={classes.terminal}>
        <h1>
          Помилка <span className={classes.errorCode}>404</span>
        </h1>
        <p className={classes.output}>
          СТОРІНКА ЩО ВИ ШУКАЄТЕ МОЖЛИВО БУЛА ВИДАЛЕНОЮ, ПЕРЕЙМЕНОВАНОЮ АБО Є ТИМЧАСОВО
          НЕДОСТУПНОЮ.
        </p>
        <p className={classes.output}>
          Будь ласка, спробуйте{" "}
          <Link href='#'>
            <a onClick={() => window.history.back()} className={classes.link}>
              повернутися назад
            </a>
          </Link>{" "}
          або{" "}
          <Link href='/'>
            <a className={classes.link}>перейти на головну сторінку</a>
          </Link>
          .
        </p>
        <p className={classes.output}>Удачі.</p>
      </div>
    </div>
  )
}
