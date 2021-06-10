import React, { ReactElement } from "react"
import BottomMenuLink from "./BottomMenuButton"
import classes from "./style.module.scss"
import { /* BitcoinIcon, */ BriefcaseIcon } from "@/components/Icons"
import { DollarCircleOutlined /* BarChartOutlined */ } from "@ant-design/icons"

interface Props {}

export default function BottomMenu({}: Props): ReactElement {
  return (
    <div className={classes.body}>
      <BottomMenuLink to='/'>
        <BriefcaseIcon />
      </BottomMenuLink>
      <BottomMenuLink to='/currencies'>
        <DollarCircleOutlined />
      </BottomMenuLink>
    </div>
  )
}
