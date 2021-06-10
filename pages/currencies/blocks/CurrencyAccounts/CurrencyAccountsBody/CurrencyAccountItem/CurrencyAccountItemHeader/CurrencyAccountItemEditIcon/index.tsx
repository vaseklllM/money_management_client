import React, { ReactElement, useState } from "react"
import edit from "./edit.svg"
import { ReactSVG } from "react-svg"
import classes from "./style.module.scss"
import { ModalEditWallet } from "@/components/modals"

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
  const [visible, setVisible] = useState(false)

  return (
    <div className={className} onClick={(event) => event.stopPropagation()}>
      <ReactSVG src={edit} onClick={() => setVisible(true)} className={classes.icon} />
      <ModalEditWallet
        visible={visible}
        onCancel={() => setVisible(false)}
        id={id}
        name={name}
        currencyId={currencyId}
      />
    </div>
  )
}
