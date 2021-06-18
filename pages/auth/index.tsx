import { txt } from "@/utils"
import { useRouter } from "next/router"
import React, { ReactElement, useEffect, useState } from "react"
import AuthAdaptiveDownButtons from "./AuthAdaptiveDownButtons"
import { AuthPageButton, AuthPageH1 } from "./components"
import SignInForm from "./SignInForm"
import SignUpForm from "./SignUpForm"
import classes from "./style.module.scss"
import Cookies from "js-cookie"

/** Сторінка входу/реєстрації */
export default function Auth(): ReactElement {
  const [isSingUp, setIsSingUp] = useState(false)
  const [isLoadingPage, setIsLoadingPage] = useState(true)

  const router = useRouter()

  useEffect(() => {
    const token = Cookies.get("token")
    // const token = localStorage.getItem("token")
    if (typeof token === "string" && token !== "") {
      router.push("/")
    } else {
      setIsLoadingPage(false)
    }
  }, [])

  if (isLoadingPage) return null

  return (
    <div className={classes.body}>
      <div
        className={txt.join([classes.container, isSingUp && classes.right_panel_active])}
      >
        <div className={txt.join([classes.form_container, classes.sign_up_container])}>
          <SignUpForm />
        </div>
        <div className={txt.join([classes.form_container, classes.sign_in_container])}>
          <SignInForm />
        </div>
        <div className={classes.overlay_container}>
          <div className={classes.overlay}>
            <div className={txt.join([classes.overlay_panel, classes.overlay_left])}>
              <AuthPageH1>З поверненням!</AuthPageH1>
              <p className={classes.p}>
                Щоб підтримувати зв’язок з нами, будь ласка, увійдіть зі своєю особистою
                інформацією
              </p>
              <AuthPageButton text='Увійти' ghost onClick={() => setIsSingUp(false)} />
            </div>
            <div className={txt.join([classes.overlay_panel, classes.overlay_right])}>
              <AuthPageH1>Привіт друже!</AuthPageH1>
              <p className={classes.p}>
                Введіть свої особисті дані та розпочніть співпрацю з нами
              </p>
              <AuthPageButton
                text='Зареєструватися'
                ghost
                onClick={() => setIsSingUp(true)}
              />
            </div>
          </div>
        </div>
      </div>
      <AuthAdaptiveDownButtons
        className={classes.adaptive_down_buttons}
        isSingUp={isSingUp}
        setIsSingUp={setIsSingUp}
      />
    </div>
  )
}
