import React, { ReactElement } from "react"
import classes from "./style.module.scss"
import { ReactSVG } from "react-svg"
import { useModal } from "@/hooks"
import { enumModal } from "@/modal"

interface Props {
  className?: string
  activeValue: number
  currencyAccountId: string
  page: number
}

export default function CurrencyAccountItemPlusIcon({
  className,
  activeValue,
  currencyAccountId,
  page,
}: Props): ReactElement {
  const modal = useModal()

  function onClick() {
    modal.open(enumModal.addWalletAction, { activeValue, currencyAccountId, page })
  }

  return (
    <div className={className} onClick={(event) => event.stopPropagation()}>
      <ReactSVG src='icons/plus.svg' className={classes.icon} onClick={onClick} />
    </div>
  )
}
