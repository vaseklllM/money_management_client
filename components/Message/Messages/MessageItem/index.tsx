import { Span14 } from "@/components/Typography"
import { txt } from "@/utils"
import React, { ReactElement, useEffect, useState } from "react"
import { IMessage } from "../../hooks/useMessage"
import classes from "./style.module.scss"
import MessageItemIcon from "./MessageItemIcon"
import { SetMessagesType } from "../.."

interface Props {
  className?: string
  data: IMessage
  setMessages: SetMessagesType
}

export default function MessageItem({
  data,
  className,
  setMessages,
}: Props): ReactElement {
  const [isTimer, setIsTimer] = useState(false)

  /** додає таймер повідомленню */
  useEffect(() => {
    if (!isTimer && (data.type === "success" || data.type === "error")) {
      setIsTimer(true)
      setTimeout(() => {
        setMessages((messages) => messages.filter((i) => i.id !== data.id))
      }, 2000)
    }
  }, [data.type])

  return (
    <div className={txt.join([className, classes.message])}>
      <MessageItemIcon type={data.type} />
      <Span14 className={classes.text}>{data.content}</Span14>
    </div>
  )
}
