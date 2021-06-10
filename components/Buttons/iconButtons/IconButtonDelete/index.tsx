import { Popconfirm } from "antd"
import React, { MouseEvent, MouseEventHandler, ReactElement, useRef } from "react"
import { ReactSVG } from "react-svg"
import remove from "./dustbin.svg"
import classes from "./style.module.scss"
import { QuestionCircleOutlined } from "@ant-design/icons"
import { useStateIfMounted } from "use-state-if-mounted"
import { txt } from "@/utils"

interface onOkParams {
  setVisible: (v: boolean) => any
}

interface Props {
  bodyOnClick?: MouseEventHandler<HTMLDivElement>
  className?: string
  title?: string
  loading?: boolean
  onOk?: (e?: MouseEvent, params?: onOkParams) => any
  disabled?: boolean
}

export default function IconButtonDelete(props: Props): ReactElement {
  const { className, title = "Видалити?", loading = false, disabled = false } = props
  const [visible, setVisible] = useStateIfMounted(false)

  const bodyRef = useRef()

  function onOk(e) {
    if (!disabled) {
      props.onOk(e, { setVisible })
    }
  }

  function onDelete() {
    if (!disabled) {
      setVisible(true)
      document.addEventListener("click", clickOutside)
    }
  }

  function handleCancel() {
    setVisible(false)
    document.removeEventListener("click", clickOutside)
  }

  function clickOutside(event) {
    const domNode = bodyRef.current
    // @ts-ignore
    if (!domNode || !domNode.contains(event.target)) setVisible(false)
  }

  function bodyOnClick(event) {
    if (typeof props.bodyOnClick === "function") {
      props.bodyOnClick(event)
    } else {
      if (!disabled) event.stopPropagation()
    }
  }

  return (
    <div
      onClick={bodyOnClick}
      className={txt.join([className, disabled && classes.body_disabled])}
      ref={bodyRef}
    >
      <Popconfirm
        title={title}
        visible={visible}
        onConfirm={onOk}
        okButtonProps={{ loading }}
        onCancel={handleCancel}
        icon={<QuestionCircleOutlined style={{ color: "red" }} />}
        cancelText='Ні'
        okText='Так'
      >
        <ReactSVG src={remove} className={classes.icon} onClick={onDelete} />
      </Popconfirm>
    </div>
  )
}
