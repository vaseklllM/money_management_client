import { Span14 } from "@/components/Typography"
import { txt } from "@/utils"
import React, { ReactElement, useEffect } from "react"
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
  /** додає таймер повідомленню */
  useEffect(() => {
    if (data.type === "success") {
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
