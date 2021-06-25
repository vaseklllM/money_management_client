import React, { ReactElement, useRef } from "react"
import Header from "@/components/Wrappers/MainWrapper/FinanceHeader"
import SideMenu from "./SideMenu"
import { useAdaptiveCollapsedSideMenu } from "./useAdaptiveCollapsedSideMenu"
import classes from "./style.module.scss"
import BottomMenu from "./BottomMenu"
import { ButtonCircleAdd } from "@/components/Buttons"

interface Props {
  children: ReactElement | string | ReactElement[]
}

export default function MainWrapper(props: Props): ReactElement {
  const { children } = props

  const bodyRef = useRef(null)

  useAdaptiveCollapsedSideMenu(bodyRef)

  return (
    <div
      className={classes.main} /* style={{ backgroundImage: "url(macos-big-sur.jpg)" }} */
    >
      <Header className={classes.header} />
      <SideMenu className={classes.sideMenu} />
      <div className={classes.body} ref={bodyRef}>
        {children}
      </div>
      <BottomMenu />
      <ButtonCircleAdd />
    </div>
  )
}
