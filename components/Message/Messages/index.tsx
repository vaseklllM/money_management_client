import React, { ReactElement } from "react"
import classes from "./style.module.scss"
import { IMessage } from "../hooks/useMessage"
import MessageItem from "./MessageItem"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { SetMessagesType } from ".."

interface Props {
  messages: IMessage[]
  setMessages: SetMessagesType
}

export default function Messages({ messages, setMessages }: Props): ReactElement {
  return (
    <TransitionGroup className={classes.messages}>
      {messages.map((message) => (
        <CSSTransition
          key={message.id}
          timeout={150}
          classNames={{
            enter: classes.message_enter,
            enterActive: classes.message_enter_active,
            exit: classes.message_exit,
            exitActive: classes.message_exit_active,
          }}
        >
          <MessageItem
            data={message}
            className={classes.message}
            setMessages={setMessages}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}
