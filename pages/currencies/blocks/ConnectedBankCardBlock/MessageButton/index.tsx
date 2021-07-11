import { useMessage } from "@/components/Message/hooks"
import React, { ReactElement } from "react"

interface Props {}

export default function MessageButton({}: Props): ReactElement {
  const message = useMessage()

  const key = 1

  console.log("update")

  return (
    <div>
      <button onClick={() => message.loading({ content: "Збереження...", key })}>
        loading
      </button>
      <button onClick={() => message.success({ content: "Карту збережено", key })}>
        success
      </button>
      <button onClick={() => message.success({ content: "new message" })}>
        new message
      </button>
      <button onClick={() => message.success({ content: "new message" })}>
        test request
      </button>
    </div>
  )
}
