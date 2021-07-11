import React, { ReactElement, useEffect, useState } from "react"
import { IMessage } from "./hooks/useMessage"
import Messages from "./Messages"

interface Props {
  children?: any
}

export const MessageContext = React.createContext(null)

export default function Message({ children }: Props): ReactElement {
  const [messages, setMessages] = useState<IMessage[]>([])

  useEffect(() => {
    // messages.forEach((message) => {
    //   console.log(message)
    // })
    console.log(messages)
  }, [messages])

  return (
    <MessageContext.Provider value={setMessages}>
      {children}
      <Messages messages={messages} />
    </MessageContext.Provider>
  )
}
