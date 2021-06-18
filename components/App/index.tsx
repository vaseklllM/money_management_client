import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { MainWrapper } from "../Wrappers"
import AppBody from "./AppBody"
import Cookies from "js-cookie"

export default function App() {
  const [isLoadingPage, setIsLoadingPage] = useState(true)

  const router = useRouter()

  // console.log(Cookies.get("token"))

  useEffect(() => {
    const token = Cookies.get("token")
    // const token = localStorage.getItem("token")

    console.log(token)

    if (!token) router.push("/auth")
    else setIsLoadingPage(false)
  }, [])

  if (isLoadingPage) return null

  return (
    <MainWrapper>
      <AppBody />
    </MainWrapper>
  )
}
