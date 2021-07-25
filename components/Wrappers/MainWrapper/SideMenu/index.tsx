import React, { memo } from "react"
import SideMenuLink from "./SideMenuLink"
import classes from "./style.module.scss"
import SideMenuButtonOpen from "./SideMenuButtonOpen"
import { useSideMenuChangeOpen } from "./hooks/useSideMenuChangeOpen"
import { txt } from "@/utils"

interface Props {
  className?: string
}

export default memo(function SideMenu({ className }: Props) {
  const { open, setOpen } = useSideMenuChangeOpen()

  return (
    <div className={txt.join([classes.body, !open && classes.close_body, className])}>
      <div className={classes.links}>
        <SideMenuLink text='Портфель' to='/' icon='briefcase' />
        <SideMenuLink text='Валюти' to='/currencies' icon='currency' />
        <SideMenuLink text='Акції' to='/promotions' icon='chart' />
        <SideMenuLink text='Криптовалюта' to='/cryptocurrency' icon='bitcoin' />
      </div>
      <SideMenuButtonOpen open={open} setOpen={setOpen} />
    </div>
  )
})
