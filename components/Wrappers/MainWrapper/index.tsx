import React, { ReactElement, useRef } from "react"
import { Layout } from "antd"
import FinanceHeader from "@/components/Wrappers/MainWrapper/FinanceHeader"
import SideMenu from "./SideMenu"
import { useAdaptiveCollapsedSideMenu } from "./useAdaptiveCollapsedSideMenu"
import classes from "./style.module.scss"
import BottomMenu from "./BottomMenu"

interface Props {
  children: ReactElement | string | ReactElement[]
}

export default function MainWrapper(props: Props): ReactElement {
  const { children } = props
  const { Footer } = Layout

  const bodyRef = useRef(null)

  useAdaptiveCollapsedSideMenu(bodyRef)

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <SideMenu className={classes.sideMenu} />
        <Layout className='site-layout'>
          <FinanceHeader />
          <div ref={bodyRef}>{children}</div>
          <Footer style={{ textAlign: "center" }}>Created by Vasek ©2021</Footer>
        </Layout>
      </Layout>
      <BottomMenu />
    </>
  )
}
