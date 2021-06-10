import api from "@/api"
import { IServActiveUserData } from "@/api/user/getActiveUserData"
import { DownloadErrorCart } from "@/components/cards"
import { status } from "@/enums"
import authActions from "@/store/auth/actions"
import React, { ReactElement } from "react"
import { useDispatch } from "react-redux"

export default function AppDownloadError(): ReactElement {
  const { changeDataStatus, login } = authActions

  const dispatch = useDispatch()

  async function clickDownloadError() {
    dispatch(changeDataStatus(status.loading))
    try {
      const res: IServActiveUserData = await api.user.getUserDataByToken()
      if (res.ok) {
        dispatch(login({ ...res.data.user, isAuth: true }))
      } else {
        /** если пользователь не авторизован */
        localStorage.removeItem("token")
      }
      dispatch(changeDataStatus(status.successful))
    } catch (error) {
      dispatch(changeDataStatus(status.error))
    }
  }

  return (
    <DownloadErrorCart
      centered
      subtitle='Сталася помилка під час завантаження даних.'
      onClick={clickDownloadError}
    />
  )
}
