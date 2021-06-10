import React, { ReactElement } from "react"
import { Button } from "antd"
import { useAuthGetUser } from "@/hooks"

export default function LogoutButton(): ReactElement {
  const { getUser } = useAuthGetUser()

  function onClick() {
    localStorage.removeItem("token")
    getUser()
  }

  return (
    <Button type='primary' onClick={onClick}>
      Вихід
    </Button>
  )
}
