import { useContext } from "react"
import { MessageContext } from ".."

export type IMessageType = "loading" | "success" | "error"

interface IMessageFunc {
  content: string
  key?: number | string
}

export type IMessage = IMessageFunc & {
  type: IMessageType
  id: number
}

export default function useMessage() {
  const setMessages = useContext(MessageContext)

  /** додає унікальний id кожному елементу message */
  function getId(messages: IMessage[]) {
    if (messages.length === 0) return 0

    let id = 1

    messages.forEach((message: IMessage) => {
      if (message.id >= id) id = message.id + 1
    })

    return id
  }

  /** додає message в массив messages */
  function changeMessage(type: IMessageType) {
    return function ({ key, ...params }: IMessageFunc) {
      setMessages((messages: IMessage[]) => {
        if (
          (typeof key === "string" || typeof key === "number") &&
          messages.find((i) => i.key === key)
        ) {
          return messages.map((message) => {
            if (message.key !== key) return message
            return {
              ...message,
              ...params,
              type,
            }
          })
        } else {
          return [{ key, type, ...params, id: getId(messages) }, ...messages]
        }
      })
    }
  }

  return {
    loading: changeMessage("loading"),
    success: changeMessage("success"),
    error: changeMessage("error"),
  }
}
