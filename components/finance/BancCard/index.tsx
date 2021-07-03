import React, { ReactElement, useEffect, useRef, useState } from "react"
import classes from "./style.module.scss"
import { txt } from "../../../utils"
import { useResize } from "@/hooks"
import BancCardButtonAdd from "./BancCardButtonAdd"
import BancCardIconIsNotValid from "./BancCardIconIsNotValid"
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

// const ANIMATION_TIME = 700

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
      {/* <div className={classes.main} ref={mainRef}>
        <Col
          className={txt.join([classes.card, isAdd && classes.active_card, className])}
          style={{
            transition: `width ${t}s, height ${t}s ease-in-out`,
            height: `${bodyHeight + 84}px`,
            width: `${bodyWidth + 300}px`,
          }}
        >
          <div>
            <div className={classes.title}>
              <Title level={5} className={classes.title_text}>
                {title}
              </Title>
              <div className={classes.title_right}>
                <BancCardButtonAdd
                  isAdd={isAdd}
                  changeIsAdd={changeIsAdd}
                  added={added}
                  onDelete={onDelete}
                />
                <BancCardIconIsNotValid
                  isValid={isValid}
                  className={classes.title_button_is_not_valid}
                />
              </div>
            </div>
            {isShowBody && <div className={classes.hr} />}
            {isShowBody && (
              <div className={classes.body} ref={bodyRef}>
                {getChildren()}
              </div>
            )}
          </div>
        </Col>
      </div> */}
    </div>
  )

  // return (
  //   <div className={classes.main} ref={mainRef}>
  //     <Col
  //       className={txt.join([classes.card, isAdd && classes.active_card, className])}
  //       style={{
  //         transition: `width ${t}s, height ${t}s ease-in-out`,
  //         height: `${bodyHeight + 84}px`,
  //         width: `${bodyWidth + 300}px`,
  //       }}
  //     >
  //       <div>
  //         <div className={classes.title}>
  //           <Title level={5} className={classes.title_text}>
  //             {title}
  //           </Title>
  //           <div className={classes.title_right}>
  //             <BancCardButtonAdd
  //               isAdd={isAdd}
  //               changeIsAdd={changeIsAdd}
  //               added={added}
  //               onDelete={onDelete}
  //             />
  //             <BancCardIconIsNotValid
  //               isValid={isValid}
  //               className={classes.title_button_is_not_valid}
  //             />
  //           </div>
  //         </div>
  //         {isShowBody && <div className={classes.hr} />}
  //         {isShowBody && (
  //           <div className={classes.body} ref={bodyRef}>
  //             {getChildren()}
  //           </div>
  //         )}
  //       </div>
  //     </Col>
  //   </div>
  // )
}
