import React, { MouseEventHandler, ReactElement } from "react"
import ButtonBlueWrapper from "./ButtonBlueWrapper"

export interface ButtonBlueProps {
  className?: string
  to?: string
  openNewTab?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  loading?: boolean
  disabled?: boolean
}

type Props = ButtonBlueProps & {
  children: string | number
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
