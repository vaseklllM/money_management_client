import { ICurrencyAccountData } from "@/pages/currencies/currencyAccounts.gql"
import { txt } from "@/utils"
import React, { ReactElement } from "react"
import { useStateIfMounted } from "use-state-if-mounted"
import CurrencyAccountItemHeader from "./CurrencyAccountItemHeader"
import CurrencyAccountItemHistory from "./CurrencyAccountItemHistory"
import classes from "./style.module.scss"

interface Props {
  data: ICurrencyAccountData
  className?: string
}

export default function CurrencyAccountItem({ data, className }: Props): ReactElement {
  const [active, setActive] = useStateIfMounted(false)

  return (
    <div className={txt.join([className, classes.item, active && classes.active_item])}>
      <CurrencyAccountItemHeader
        onClick={() => setActive((v) => !v)}
        data={data}
        arrowActive={active}
      />
      {active && (
        <CurrencyAccountItemHistory
          data={data.history}
          currency={data.currency}
          pagination={data.historyPagination}
          currencyAccountId={data.id}
          numberOfHistoryItems={data.historyPagination.amountOfElements}
          page={data.historyPagination.page}
        />
      )}
    </div>
  )
}
