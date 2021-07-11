import React, { ReactElement, useEffect } from "react"
import { useStateIfMounted } from "use-state-if-mounted"
import { IMessage } from "./hooks/useMessage"
import Messages from "./Messages"

interface Props {
  children?: any
}

export const MessageContext = React.createContext(null)

export type SetMessagesType = React.Dispatch<React.SetStateAction<IMessage[]>>

export default function Message({ children }: Props): ReactElement {
  const [messages, setMessages] = useStateIfMounted<IMessage[]>([])

  return (
    <MessageContext.Provider value={setMessages}>
      {children}
      <Messages messages={messages} setMessages={setMessages} />
    </MessageContext.Provider>
  )
}
