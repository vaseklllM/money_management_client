import React, { MouseEventHandler, ReactElement } from "react"
import ButtonBlueWrapper from "./ButtonBlueWrapper"
import classes from "./style.module.scss"

interface Props {
  className?: string
  children: string | number
  to?: string
  openNewTab?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  loading?: boolean
  disabled?: boolean
}

export default function ButtonBlue({
  className,
  children,
  to,
  openNewTab,
  onClick,
  loading,
  disabled,
}: Props): ReactElement {
  return (
    <ButtonBlueWrapper
      onClick={onClick}
      className={className}
      openNewTab={openNewTab}
      to={to}
      loading={loading}
      disabled={disabled}
    >
      {children}
    </ButtonBlueWrapper>
  )
}
