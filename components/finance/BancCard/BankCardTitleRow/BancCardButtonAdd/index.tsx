import React, { ReactElement } from "react"
import { Tooltip } from "antd"
import { txt } from "@/utils"
import classes from "./style.module.scss"
import BancCardButtonAddIcon from "./BancCardButtonAddIcon"

interface Props {
  open: boolean
  changeOpen: Function
  added?: boolean /** true - банківська карта добавлена */
  onDelete?: Function
  className?: string
}

export default function BancCardButtonAdd(props: Props): ReactElement {
  const { open, changeOpen, added, onDelete = () => {}, className } = props

  function onClick() {
    if (added) {
      onDelete()
    } else {
      changeOpen((v: boolean) => !v)
    }
  }

  return (
    <Tooltip title={added ? "Видалити карту" : open ? "Приховати" : "Підключити"}>
      <button
        onClick={onClick}
        className={txt.join([
          className,
          classes.button,
          added ? classes.red : classes.blue,
        ])}
      >
        <BancCardButtonAddIcon icon={added ? "delete" : open ? "minus" : "plus"} />
      </button>
    </Tooltip>
  )
}
