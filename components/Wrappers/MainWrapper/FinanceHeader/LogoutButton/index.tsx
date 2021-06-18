import React, { ReactElement } from "react"
import { Button } from "antd"
import { useAuthGetUser } from "@/hooks"
import Cookies from "js-cookie"

export default function LogoutButton(): ReactElement {
  const { getUser } = useAuthGetUser()

  function onClick() {
    Cookies.remove("token")
    // localStorage.removeItem("token")
    getUser()
  }

  return (
    <Button type='primary' onClick={onClick}>
      Вихід
    </Button>
  )
}
