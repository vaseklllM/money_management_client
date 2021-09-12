import React, { ReactElement } from "react"

export interface editCurrencyAccountProps {
  id: string
  name: string
  currencyId: string
}

export default function EditCurrencyAccount(
  props: editCurrencyAccountProps
): ReactElement {
  return <div>EditCurrencyAccount</div>
}
