import React, { ReactElement } from "react"
import { Button, Tooltip } from "antd"
import { PlusOutlined, MinusOutlined, DeleteOutlined } from "@ant-design/icons"

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
      <Button
        onClick={onClick}
        type='primary'
        shape='circle'
        danger={added}
        icon={added ? <DeleteOutlined /> : open ? <MinusOutlined /> : <PlusOutlined />}
        className={className}
      />
    </Tooltip>
  )
}
