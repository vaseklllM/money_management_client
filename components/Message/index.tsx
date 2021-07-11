import React, { ReactElement, useEffect, useState } from "react"
import { IMessage } from "./hooks/useMessage"
import Messages from "./Messages"

interface Props {
  children?: any
}

export const MessageContext = React.createContext(null)

export default function Message({ children }: Props): ReactElement {
  const [messages, setMessages] = useState<IMessage[]>([])

  /** додає таймер кожному повідомленню */
  useEffect(() => {
    messages.forEach((message) => {
      if (message.type === "success") {
        setTimeout(() => {
          setMessages((m) => m.filter((i) => i.id !== message.id))
        }, 2000)
      }
    })
  }, [messages])

  return (
    <MessageContext.Provider value={setMessages}>
      {children}
      <Messages messages={messages} />
    </MessageContext.Provider>
  )
}
