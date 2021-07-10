import React, { ReactElement } from "react"
import classes from "./style.module.scss"
import { IMessage } from "../hooks/useMessage"
import MessageItem from "./MessageItem"

interface Props {
  messages: IMessage[]
}

export default function Messages({ messages }: Props): ReactElement {
  return (
    <div className={classes.messages}>
      {messages.map((el, idx) => (
        <MessageItem data={el} key={idx} className={classes.message} />
      ))}
    </div>
  )
}
