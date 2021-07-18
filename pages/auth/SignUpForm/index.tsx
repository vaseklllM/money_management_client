import React, { ReactElement } from "react"
import { AuthPageButton, AuthPageForm, AuthPageH1, AuthPageInput } from "../components"
import classes from "./style.module.scss"
import { useForm } from "react-hook-form"
import SING_UP from "./SIGN_UP.gql"
import { useMutation } from "@apollo/client"
import { err } from "@/utils"
import { useRouter } from "next/router"
import { useAuthGetUser } from "@/hooks"
import Cookies from "js-cookie"
import { useMessage } from "@/components/Message/hooks"

const key = "singUp"

type Inputs = {
  email: string
  nickname: string
  password: string
}

interface ISignUpData {
  signUp: {
    token: string
  }
}

/** форма реєстрації нового аккаунта */
export default function SignUpForm(): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const message = useMessage()

  const [signUp] = useMutation<ISignUpData, Inputs>(SING_UP)
  const { getUser } = useAuthGetUser()
  const router = useRouter()

  /** Реєстрація */
  async function onSubmit(data: Inputs) {
    message.loading({ content: "Реєстрація...", key })

    try {
      const result = await signUp({
        variables: {
          email: data.email,
          password: data.password,
          nickname: data.nickname,
        },
      })

      message.success({ content: "Успішна реєстрація", key })
      // localStorage.setItem("token", result.data.signUp.token)
      Cookies.set("token", result.data.signUp.token)
      getUser()
      router.push("/")
    } catch (error) {
      const arrErrMessages = err.getFirstMessage(error)
      if (arrErrMessages) {
        message.error({
          content: arrErrMessages,
          key,
        })
      }
    }
  }

  function getNicknameErrText() {
    if (errors?.nickname?.type === "required") return "Введіть нікнейм"
  }

  function getEmailErrText() {
    if (errors?.email?.type === "required") return "Введіть email"
  }

  function getPasswordErrText() {
    if (errors?.password?.type === "required") return "Введіть пароль"
  }

  return (
    <AuthPageForm onSubmit={handleSubmit(onSubmit)}>
      <AuthPageH1>Зареєструватися</AuthPageH1>
      <span className={classes.span}>створити новий аккаунт</span>
      <AuthPageInput
        {...register("nickname", { required: true })}
        className={classes.input}
        type='text'
        placeholder='Нікнейм'
        errText={getNicknameErrText()}
      />
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
      <AuthPageButton className={classes.button} text='Зареєструватися' />
    </AuthPageForm>
  )
}
