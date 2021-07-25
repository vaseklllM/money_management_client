import React, { ReactElement, useState } from "react"
import classes from "./style.module.scss"
import { ReactSVG } from "react-svg"
import { ModalAddWalletAction } from "@/components/modals"

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
  const [visible, setVisible] = useState(false)

  return (
    <div className={className} onClick={(event) => event.stopPropagation()}>
      <ReactSVG
        src='icons/plus.svg'
        className={classes.icon}
        onClick={() => setVisible(true)}
      />
      <ModalAddWalletAction
        visible={visible}
        onCancel={() => setVisible(false)}
        activeValue={activeValue}
        currencyAccountId={currencyAccountId}
        page={page}
      />
    </div>
  )
}
