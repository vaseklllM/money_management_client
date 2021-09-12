import React, { ReactElement, useState } from "react"
import edit from "./edit.svg"
import { ReactSVG } from "react-svg"
import classes from "./style.module.scss"
import { ModalEditWallet } from "@/components/modals"
import { useModal } from "@/hooks"
import { enumModal } from "@/modal"

interface Props {
  className?: string
  id: string
  name: string
  currencyId: string
}

export default function CurrencyAccountItemEditIcon({
  className,
  id,
  name,
  currencyId,
}: Props): ReactElement {
  // const [visible, setVisible] = useState(false)

  const modal = useModal()

  function onClick() {
    modal.open(enumModal.editCurrencyAccount, { id, currencyId, name })
  }

  return (
    <div className={className} onClick={(event) => event.stopPropagation()}>
      <ReactSVG src={edit} onClick={onClick} className={classes.icon} />
      {/* <ModalEditWallet
        visible={visible}
        onCancel={() => setVisible(false)}
        id={id}
        name={name}
        currencyId={currencyId}
      /> */}
    </div>
  )
}
