import React, { ReactElement } from "react"
import { txt } from "@/utils"
import classes from "./style.module.scss"
import BancCardButtonAddIcon from "./BancCardButtonAddIcon"
import { TooltipBlack } from "@/components/Tooltips"

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
    <TooltipBlack
      className={className}
      title={added ? "Видалити карту" : open ? "Приховати" : "Підключити"}
    >
      <button
        onClick={onClick}
        className={txt.join([classes.button, added ? classes.red : classes.blue])}
      >
        <BancCardButtonAddIcon icon={added ? "delete" : open ? "minus" : "plus"} />
      </button>
    </TooltipBlack>
  )
}
