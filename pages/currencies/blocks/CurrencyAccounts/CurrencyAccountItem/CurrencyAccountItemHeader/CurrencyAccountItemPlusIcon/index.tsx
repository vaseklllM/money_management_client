import React, { ReactElement, useState } from "react"
import classes from "./style.module.scss"
import { ReactSVG } from "react-svg"
import { ModalAddWalletAction } from "@/components/modals"
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
  // const [visible, setVisible] = useState(false)
  const modal = useModal()

  function onClick() {
    modal.open(enumModal.addWalletAction, { activeValue, currencyAccountId, page })
  }

  return (
    <div className={className} onClick={(event) => event.stopPropagation()}>
      <ReactSVG
        src='icons/plus.svg'
        className={classes.icon}
        // onClick={() => setVisible(true)}
        onClick={onClick}
      />
      {/* <ModalAddWalletAction
        visible={visible}
        onCancel={() => setVisible(false)}
        activeValue={activeValue}
        currencyAccountId={currencyAccountId}
        page={page}
      /> */}
    </div>
  )
}
