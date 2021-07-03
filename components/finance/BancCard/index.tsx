import React, { ReactElement, useState } from "react"
import classes from "./style.module.scss"
import { txt } from "../../../utils"
import BankCardWrapper from "./BankCardWrapper"
import BankCardTitleRow from "./BankCardTitleRow"
import BankCardBody from "./BankCardBody"

interface childrenFunc {
  onClose: Function
}

type childrenFunction = ({ onClose }: childrenFunc) => ReactElement

type TChildren = ReactElement | ReactElement[] | childrenFunction | string

interface Props {
  title?: string
  className?: string
  children?: TChildren
  added?: boolean /** true - банківська карта добавлена */
  onDelete?: Function
  isValid?: boolean
}

export default function BancCard(props: Props): ReactElement {
  const { title = "card title", className, children, added, onDelete, isValid } = props

  const [isShowBody, setIsShowBody] = useState(false)

  function onClose() {
    setIsShowBody(false)
  }

  function getChildren() {
    if (typeof children === "function") {
      return children({ onClose })
    } else return children
  }

  return (
    <div className={txt.join([classes.body, className])}>
      <BankCardTitleRow
        onDelete={onDelete}
        changeOpen={setIsShowBody}
        open={isShowBody}
        title={title}
        added={added}
        isValid={isValid}
      />
      {isShowBody && (
        <BankCardWrapper open={isShowBody} className={classes.wrapper}>
          <BankCardBody>{getChildren()}</BankCardBody>
        </BankCardWrapper>
      )}
    </div>
  )
}
