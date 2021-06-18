import React, { ReactElement } from "react"
import { AuthPageButton, AuthPageForm, AuthPageH1, AuthPageInput } from "../components"
import classes from "./style.module.scss"
import { useForm } from "react-hook-form"
import SIGN_IN from "./SIGN_IN.gql"
import { useMutation } from "@apollo/client"
import { message } from "antd"
import { err } from "@/utils"
import { useRouter } from "next/router"
import { useAuthGetUser } from "@/hooks"
import Cookies from "js-cookie"

const key = "singIn"

interface ISignInData {
  signIn: {
    token: string
  }
}

type Inputs = {
  email: string
  password: string
}

/** форма входа в аккаунт */
export default function SignInForm(): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const [signIn] = useMutation<ISignInData, Inputs>(SIGN_IN)
  const { getUser } = useAuthGetUser()
  const router = useRouter()

  /** Вхід в аккаунт  */
  async function onSubmit(data: Inputs) {
    message.loading({ content: "Вхід...", key })

    try {
      const result = await signIn({
        variables: {
          email: data.email,
          password: data.password,
        },
      })

      message.success({ content: "Успішна авторизація", key, duration: 2 })
      // localStorage.setItem("token", result.data.signIn.token)
      Cookies.set("token", result.data.signIn.token)
      getUser()
      router.push("/")
    } catch (error) {
      const arrErrMessages = err.getFirstMessage(error)
      if (arrErrMessages) {
        message.error({
          content: arrErrMessages,
          key,
          duration: 3,
        })
      }
    }
  }

  function getEmailErrText() {
    if (errors?.email?.type === "required") return "Введіть email"
  }

  function getPasswordErrText() {
    if (errors?.password?.type === "required") return "Введіть пароль"
  }

  return (
    <AuthPageForm onSubmit={handleSubmit(onSubmit)}>
      <AuthPageH1>Увійти</AuthPageH1>
      <span className={classes.span}>використати свій аккаунт</span>
      <AuthPageInput
        {...register("email", { required: true })}
        className={classes.input}
        type='email'
        placeholder='Email'
        errText={getEmailErrText()}
      />
      <AuthPageInput
        {...register("password", { required: true })}
        className={classes.input}
        type='password'
        placeholder='Пароль'
        errText={getPasswordErrText()}
      />
      <AuthPageButton className={classes.button} text='Увійти' />
    </AuthPageForm>
  )
}
