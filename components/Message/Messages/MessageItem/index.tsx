import { CircleLoader } from "@/components/Loaders"
import { Span14 } from "@/components/Typography"
import { txt } from "@/utils"
import React, { ReactElement } from "react"
import { IMessage } from "../../hooks/useMessage"
import classes from "./style.module.scss"

interface Props {
  className?: string
  data: IMessage
}

export default function MessageItem({ data, className }: Props): ReactElement {
  return (
    <div className={txt.join([className, classes.message])}>
      <CircleLoader color='blue' />
      <Span14 className={classes.text}>{data.content}</Span14>
    </div>
  )
}
