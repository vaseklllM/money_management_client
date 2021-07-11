import React, { ReactElement } from "react"
import classes from "./style.module.scss"
import AddMonobank from "./AddMonobank"
import ContentBlock from "@/components/finance/ContentBlock"
import { H5, P14 } from "@/components/Typography"
// import MessageButton from "./MessageButton"

export default function ConnectedBankCardBlock(): ReactElement {
  return (
    <ContentBlock>
      {/* <MessageButton /> */}
      <H5>Підключення банківських карт</H5>
      <P14 className={classes.subtitle}>
        Підключіть банківські карти для регулярного автоматичного перегляду змін на
        рахунках.
      </P14>
      <AddMonobank className={classes.bank_card} />
    </ContentBlock>
  )
}
