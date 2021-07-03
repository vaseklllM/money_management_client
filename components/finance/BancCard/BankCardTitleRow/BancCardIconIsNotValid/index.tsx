import React, { memo, ReactElement } from "react"
import { ReactSVG } from "react-svg"
import icon from "./warning.svg"
import classes from "./style.module.scss"
import { Popover } from "antd"
import { txt } from "@/utils"

interface Props {
  className?: string
}

const content = (
  <div>
    <p>Помилка при спробі оновити дані</p>
  </div>
)

export default memo(function BancCardIconIsNotValid({ className }: Props): ReactElement {
  return (
    <Popover content={content} trigger='hover'>
      <ReactSVG src={icon} className={txt.join([classes.icon, className])} />
    </Popover>
  )
})
