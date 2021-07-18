import { ReactElement } from "react"
import { H4, P14 } from "@/components/Typography"

interface Props {
  isNotCards: boolean
}

export default function BankCardsTitleRow(props: Props): ReactElement {
  const { isNotCards } = props

  return (
    <>
      <H4>Банківські карти</H4>
      <P14>
        {isNotCards
          ? "У вас немає підключених банківських карт."
          : "Система регулярно автоматично оновлює данні з підключених банківських карт."}
      </P14>
    </>
  )
}
