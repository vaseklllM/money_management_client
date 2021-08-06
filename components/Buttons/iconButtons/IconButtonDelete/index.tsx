import React, { MouseEventHandler, ReactElement, useRef } from "react"
import { ReactSVG } from "react-svg"
import classes from "./style.module.scss"
import { useStateIfMounted } from "use-state-if-mounted"
import { txt } from "@/utils"
import { TooltipConfirm } from "@/components/Tooltips"
import { tooltipConfirmIconTypes } from "@/components/Tooltips/TooltipConfirm"

interface onOkParams {
  setVisible: (v: boolean) => any
}

interface Props {
  bodyOnClick?: MouseEventHandler<HTMLDivElement>
  className?: string
  title?: string
  loading?: boolean
  onOk?: (params?: onOkParams) => any
  disabled?: boolean
}

export default function IconButtonDelete(props: Props): ReactElement {
  const { className, title = "Видалити?", loading = false, disabled = false } = props
  const [visible, setVisible] = useStateIfMounted(false)

  const bodyRef = useRef()

  function onOk() {
    if (!disabled) {
      props.onOk({ setVisible })
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
    <div className={className}>
      <div
        onClick={bodyOnClick}
        className={txt.join([disabled && classes.body_disabled])}
        ref={bodyRef}
      >
        <TooltipConfirm
          title={title}
          visible={visible}
          iconType={tooltipConfirmIconTypes.question}
          cancelText='Ні'
          okText='Так'
          onCancel={handleCancel}
          onConfirm={onOk}
          okButtonProps={{ loading }}
        >
          <ReactSVG src='icons/trash.svg' className={classes.icon} onClick={onDelete} />
        </TooltipConfirm>
      </div>
    </div>
  )
}
