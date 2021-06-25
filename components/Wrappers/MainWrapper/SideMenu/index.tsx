import React, { memo } from "react"
// import { Layout, /* Menu */ } from "antd"
// import { useRouter } from "next/router"
// import { /* BitcoinIcon, */ BriefcaseIcon } from "@/components/Icons"
// import { DollarCircleOutlined /* , BarChartOutlined  */ } from "@ant-design/icons"
import SideMenuLink from "./SideMenuLink"
import classes from "./style.module.scss"
import briefcase from "./icons/briefcase.svg"
import currency from "./icons/currency.svg"
import SideMenuButtonOpen from "./SideMenuButtonOpen"
import { useSideMenuChangeOpen } from "./hooks/useSideMenuChangeOpen"
import { txt } from "@/utils"

// const { Sider } = Layout
interface Props {
  className?: string
}

export default memo(function SideMenu({ className }: Props) {
  const { open, setOpen } = useSideMenuChangeOpen()
  // const router = useRouter()

  return (
    <div className={txt.join([classes.body, !open && classes.close_body, className])}>
      <div className={classes.links}>
        <SideMenuLink text='Портфель' to='/' icon={briefcase} />
        <SideMenuLink text='Валюти' to='/currencies' icon={currency} />
      </div>
      <SideMenuButtonOpen open={open} setOpen={setOpen} />
    </div>
  )

  // const financeMenuList = [
  //   {
  //     id: "briefcase",
  //     name: "Портфель",
  //     path: "/",
  //     url: "/",
  //     icon: <BriefcaseIcon />,
  //   },
  //   {
  //     id: "currencies",
  //     name: "Валюти",
  //     path: "/currencies",
  //     url: "/currencies",
  //     icon: <DollarCircleOutlined />,
  //   },
  //   // {
  //   //   id: "actions",
  //   //   name: "Акції",
  //   //   path: "/promotions",
  //   //   url: "/promotions",
  //   //   icon: <BarChartOutlined />,
  //   // },
  //   // {
  //   //   id: "cryptocurrency",
  //   //   name: "Криптовалюта",
  //   //   path: "/cryptocurrency",
  //   //   url: "/cryptocurrency",
  //   //   icon: <BitcoinIcon />,
  //   // },
  // ]

  // return (
  //   <Sider
  //     className={className}
  //     theme='light'
  //     collapsible
  //     collapsed={collapsed}
  //     onCollapse={setCollapsed}
  //   >
  //     <div className='logo' />
  //     <Menu
  //       theme='light'
  //       defaultSelectedKeys={["briefcase"]}
  //       mode='inline'
  //       onClick={(e) => {
  //         const newUrl = financeMenuList.find((i) => i.id === e.key).url
  //         if (router.pathname !== newUrl) router.push(newUrl)
  //       }}
  //       selectedKeys={[financeMenuList.find((i) => i.path === router.route).id]}
  //     >
  //       {financeMenuList.map((el) => (
  //         <Menu.Item key={el.id} icon={el.icon}>
  //           {el.name}
  //         </Menu.Item>
  //       ))}
  //     </Menu>
  //   </Sider>
  // )
})
