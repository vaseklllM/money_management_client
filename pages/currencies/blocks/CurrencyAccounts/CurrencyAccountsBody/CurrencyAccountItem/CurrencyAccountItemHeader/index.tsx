import { ICurrencyAccountData } from "@/pages/currencies/currencyAccounts.gql"
import { txt } from "@/utils"
import React, { ReactElement } from "react"
import CurrencyAccountItemArrowIcon from "./CurrencyAccountItemArrowIcon"
import CurrencyAccountItemDeleteIcon from "./CurrencyAccountItemDeleteIcon"
import CurrencyAccountItemEditIcon from "./CurrencyAccountItemEditIcon"
import CurrencyAccountItemName from "./CurrencyAccountItemName"
import CurrencyAccountItemPlusIcon from "./CurrencyAccountItemPlusIcon"
import CurrencyAccountItemValue from "./CurrencyAccountItemValue"
import classes from "./style.module.scss"

interface Props {
  onClick?: () => any
  data: ICurrencyAccountData
  arrowActive: boolean
}

export default function CurrencyAccountItemHeader({
  onClick,
  data,
  arrowActive,
}: Props): ReactElement {
  return (
    <div
      onClick={onClick}
      className={txt.join([classes.header, arrowActive && classes.active_header])}
    >
      <CurrencyAccountItemName className={classes.name} name={data.name} />
      <CurrencyAccountItemValue
        className={classes.value}
        value={data.value}
        currencyCode={data.currency.code}
      />
      <CurrencyAccountItemPlusIcon
        className={classes.plus_icon}
        activeValue={data.value}
        currencyAccountId={data.id}
        page={data.historyPagination.page}
      />
      <CurrencyAccountItemEditIcon
        className={classes.edit_icon}
        id={data.id}
        name={data.name}
        currencyId={data.currency.id}
      />
      <CurrencyAccountItemDeleteIcon className={classes.delete_icon} id={data.id} />
      <CurrencyAccountItemArrowIcon
        className={classes.arrow_icon}
        arrowActive={arrowActive}
      />
    </div>
  )
}
