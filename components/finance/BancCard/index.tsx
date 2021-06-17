import React, { ReactElement, useEffect, useRef, useState } from "react"
import { Col, Typography } from "antd"
import classes from "./style.module.scss"
import { txt } from "../../../utils"
import { useResize } from "@/hooks"
import BancCardButtonAdd from "./BancCardButtonAdd"
import BancCardIconIsNotValid from "./BancCardIconIsNotValid"

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

const ANIMATION_TIME = 700

export default function BancCard(props: Props): ReactElement {
  const { title = "card title", className, children, added, onDelete, isValid } = props

  const { Title } = Typography
  const [isAdd, setIsAdd] = useState(false)
  const [isShowBody, setIsShowBody] = useState(false)
  const [bodyHeight, setBodyHeight] = useState(0)
  const [bodyWidth, setBodyWidth] = useState(0)

  const bodyRef = useRef(null)
  const mainRef = useRef(null)

  const { width } = useResize(mainRef)

  useEffect(() => {
    if (width !== 0) {
      if (bodyRef.current && isAdd) {
        setBodyWidth(mainRef.current?.offsetWidth ?? 0)
        setTimeout(() => {
          setBodyHeight(bodyRef.current?.offsetHeight ?? 0)
        }, ANIMATION_TIME / 2)
      } else {
        setBodyWidth(0)
        setBodyHeight(0)
      }
    }
  }, [isShowBody, isAdd, width, children])

  function changeIsAdd() {
    if (isAdd) {
      setIsAdd(false)
      setTimeout(() => {
        setIsShowBody(false)
      }, ANIMATION_TIME)
    } else {
      setIsShowBody(true)
      setIsAdd(true)
    }
  }

  const t = ANIMATION_TIME / 1000

  function onClose() {
    setIsAdd(false)
    setIsShowBody(false)
  }

  function getChildren() {
    if (typeof children === "function") {
      return children({ onClose })
    } else return children
  }

  return (
    <div className={classes.main} ref={mainRef}>
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
    </div>
  )
}
