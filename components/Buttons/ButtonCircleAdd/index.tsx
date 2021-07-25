import { txt } from "@/utils"
import { useQuery } from "@apollo/client"
import React, { ReactElement, useRef } from "react"
import classes from "./style.module.scss"
import { USER } from "./user.gql"
import { useStateIfMounted } from "use-state-if-mounted"
import ButtonCircleAddNewWallet from "./buttons/ButtonCircleAddNewWallet"
import ButtonCircleAddItem from "./ButtonCircleAddItem"
import ButtonCircleAddPlusIcon from "./ButtonCircleAddPlusIcon"

interface IUSerData {
  user: {
    id: string
  }
}

export default function ButtonCircleAdd(): ReactElement {
  const { loading, data } = useQuery<IUSerData>(USER)
  const [active, setActive] = useStateIfMounted(false)

  const bodyRef = useRef()

  if (loading || !data || !data.user.id) return null

  function onClick() {
    /** відкриття */
    setActive(!active)
    if (!active) {
      document.addEventListener("click", clickOutside)
    } else {
      document.removeEventListener("click", clickOutside)
    }
  }

  function clickOutside(event) {
    const domNode = bodyRef.current
    // @ts-ignore
    if (!domNode || !domNode.contains(event.target)) setActive(false)
  }

  return (
    <div
      className={txt.join([classes.body, active && classes.body_active])}
      ref={bodyRef}
    >
      <div className={txt.join([classes.circle, classes.label])} onClick={onClick}>
        <ButtonCircleAddPlusIcon className={classes.circle_icon} />
      </div>
      <div className={classes.subs}>
        <ButtonCircleAddItem className={classes.subs_item}>
          <ButtonCircleAddNewWallet onClose={onClick} />
        </ButtonCircleAddItem>

        {/* {arr.getArrByLength({ end: 2 }, (idx) => (
          <ButtonCircleAddItem key={idx} className={classes.subs_item} />
        ))} */}
      </div>
    </div>
  )
}
