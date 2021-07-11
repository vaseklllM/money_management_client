// import { useMessage } from "@/components/Message/hooks"
// import React, { ReactElement } from "react"

// export default function MessageButton(): ReactElement {
//   const message = useMessage()

//   const key = 1
//   const key2 = 2

//   async function onClick() {
//     message.loading({ content: "test request loading...", key: key2 })
//     await new Promise((res) =>
//       setTimeout(() => {
//         res("")
//       }, 2500)
//     )
//     message.success({ content: "test request success", key: key2 })
//     // message.error({ content: "test request success", key: key2 })
//   }

//   return (
//     <div>
//       <button onClick={() => message.loading({ content: "Збереження...", key })}>
//         loading
//       </button>
//       <button onClick={() => message.success({ content: "Карту збережено", key })}>
//         success
//       </button>
//       <button onClick={() => message.error({ content: "new message" })}>
//         new message
//       </button>
//       <button onClick={onClick}>test request</button>
//     </div>
//   )
// }
