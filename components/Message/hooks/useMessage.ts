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

type IChangeMessage = IMessageFunc & {
  type: IMessageType
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
  function changeMessage({ key, ...params }: IChangeMessage) {
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
        return [{ key, ...params, id: getId(messages) }, ...messages]
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
