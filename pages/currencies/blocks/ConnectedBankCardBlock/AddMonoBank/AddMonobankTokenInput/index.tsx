import classes from "./style.module.scss"
import { ChangeEvent, ReactElement, useState } from "react"
import InputActiveIcon from "./InputActiveIcon"
import { status } from "@/enums"
import api from "@/api"
import { Input } from "@/components/Inputs"

interface Props {
  token: string
  setToken: Function
  setCardData: Function
  placeholder?: string
}

export default function AddMonobankTokenInput(props: Props): ReactElement {
  const { token, setToken, setCardData, placeholder } = props
  const [isActiveToken, setIsActiveToken] = useState<status>(status.no_data)

  async function changeToken(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setToken(value)
    if (value.length === 44) {
      setIsActiveToken(status.loading)

      const res = await api.finance.banks.monobank.getUserInfo(value)
      if (res.ok) {
        setCardData(res.data)
        setIsActiveToken(status.successful)
      } else {
        setIsActiveToken(status.error)
        setCardData(null)
      }
    } else if (isActiveToken !== status.no_data) {
      setIsActiveToken(status.no_data)
      setCardData(null)
    } else {
      setCardData(null)
    }
  }

  return (
    <div className={classes.token_input_row}>
      <Input
        className={classes.token_input}
        placeholder={placeholder}
        onChange={changeToken}
        value={token}
      />
      <InputActiveIcon
        className={classes.token_status_icon}
        isActiveToken={token !== "" && isActiveToken}
      />
    </div>
  )
}
