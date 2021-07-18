import { ReactElement } from "react"
import classes from "./style.module.scss"

interface IProps {
  children: any
}

export default function ContentBlock(props: IProps): ReactElement {
  const { children } = props

  return <div className={classes.block}>{children}</div>
}
