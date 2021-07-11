import { useContext } from "react"
import { MessageContext } from ".."

interface IMessageFunc {
  content: string
  key?: number | string
}

export type IMessageType = "loading" | "success" | "error"

export type IMessage = IMessageFunc & {
  type: IMessageType
}

export default function useMessage() {
  const setMessages = useContext(MessageContext)

  function changeMessage({ key, ...params }: IMessage) {
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
          }
        })
      } else {
        return [{ key, ...params }, ...messages]
      }
    })
  }

  function loading(params: IMessageFunc) {
    changeMessage({ ...params, type: "loading" })
  }

  function success(params: IMessageFunc) {
    changeMessage({ ...params, type: "success" })
  }

  return {
    loading,
    success,
  }
}
