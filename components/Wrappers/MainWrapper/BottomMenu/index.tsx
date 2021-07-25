import React, { ReactElement } from "react"
import BottomMenuLink from "./BottomMenuButton"
import classes from "./style.module.scss"
import { ReactSVG } from "react-svg"

export default function BottomMenu(): ReactElement {
  return (
    <div className={classes.body}>
      <BottomMenuLink to='/'>
        <ReactSVG src='sideMenuIcons/briefcase.svg' className={classes.icon} />
      </BottomMenuLink>
      <BottomMenuLink to='/currencies'>
        <ReactSVG src='sideMenuIcons/currency.svg' className={classes.icon} />
      </BottomMenuLink>
    </div>
  )
}
