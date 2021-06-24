import ContentBlock from "@/components/finance/ContentBlock"
import React, { ReactElement } from "react"
import MonobankBlockBody from "./MonobankBlockBody"
import MonobankBlockTitleRow from "./MonobankBlockTitleRow"
import classes from "./style.module.scss"
import BANC_CARDS from "../../bankCards.gql"
import { useQuery } from "@apollo/client"
import { IBankCards } from "./interfaces"

export default function BriefcaseMonobankBlock(): ReactElement {
  const { data, loading } = useQuery<IBankCards>(BANC_CARDS)

  if (loading || !data || !data.bankcards.monobank) return null

  return (
    <ContentBlock>
      <MonobankBlockTitleRow user={data.bankcards.monobank.user} />
      <MonobankBlockBody
        className={classes.graph}
        data={data.bankcards.monobank.historyCards}
      />
    </ContentBlock>
  )
}
