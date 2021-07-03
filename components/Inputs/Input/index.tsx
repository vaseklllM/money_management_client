import { txt } from "@/utils"
import { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  className?: string
  onChange: (event: any) => any
  value: string
  placeholder?: string
}

export default function Input(props: Props): ReactElement {
  const { className, ...params } = props
  return <input className={txt.join([className, classes.input])} {...params} />
}
