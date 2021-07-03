import React, { ReactElement } from "react"
import { Button, Tooltip } from "antd"
import { PlusOutlined, MinusOutlined, DeleteOutlined } from "@ant-design/icons"

interface Props {
  isAdd: boolean
  changeIsAdd: Function
  added?: boolean /** true - банківська карта добавлена */
  onDelete?: Function
  className?: string
}

export default function BancCardButtonAdd(props: Props): ReactElement {
  const { isAdd, changeIsAdd, added, onDelete = () => {}, className } = props

  function onClick() {
    if (added) {
      onDelete()
    } else {
      changeIsAdd((v) => !v)
    }
  }

  return (
    <Tooltip title={added ? "Видалити карту" : isAdd ? "Приховати" : "Підключити"}>
      <Button
        onClick={onClick}
        type='primary'
        shape='circle'
        danger={added}
        icon={added ? <DeleteOutlined /> : isAdd ? <MinusOutlined /> : <PlusOutlined />}
        className={className}
      />
    </Tooltip>
  )
}
