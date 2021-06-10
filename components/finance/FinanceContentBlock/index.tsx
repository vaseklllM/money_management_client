import { ReactElement } from "react"
import classes from "./style.module.scss"

interface IProps {
  children: ReactElement | ReactElement[] | string
}

export default function FinanceContentBlock(props: IProps): ReactElement {
  const { children } = props

  return <div className={classes.block}>{children}</div>
}
