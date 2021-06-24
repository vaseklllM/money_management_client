import React, { ReactElement } from "react"
// import { Button } from "antd"
import { useAuthGetUser } from "@/hooks"
import Cookies from "js-cookie"
import { ButtonLogout } from "@/components/Buttons"

export default function LogoutButton(): ReactElement {
  const { getUser } = useAuthGetUser()

  function onClick() {
    Cookies.remove("token")
    getUser()
  }

  return <ButtonLogout onClick={onClick} />

  // return (
  //   <Button type='primary' onClick={onClick}>
  //     Вихід
  //   </Button>
  // )
}
