import { txt } from "@/utils"
import React, { forwardRef, ReactElement } from "react"
import classes from "./style.module.scss"

type inputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type Props = inputProps & {
  errText?: string
}

const AuthPageInput = forwardRef(
  (props: Props, ref: React.LegacyRef<HTMLInputElement>): ReactElement => {
    const { className, errText, ...params } = props

    return (
      <div
        className={txt.join([
          classes.body,
          className,
          typeof errText === "string" && classes.errorBody,
        ])}
      >
        <input ref={ref} className={classes.input} {...params} />
        {typeof errText === "string" && (
          <span className={classes.errorText}>{errText}</span>
        )}
      </div>
    )
  }
)

export default AuthPageInput
