import React, { ReactElement } from "react"
import { useAuthGetUser } from "@/hooks"
import Cookies from "js-cookie"
import { ButtonLogout } from "@/components/Buttons"

interface IProps {
  className?: string
}

export default function LogoutButton({ className }: IProps): ReactElement {
  const { getUser } = useAuthGetUser()

  function onClick() {
    Cookies.remove("token")
    getUser()
  }

  return <ButtonLogout className={className} onClick={onClick} />
}
