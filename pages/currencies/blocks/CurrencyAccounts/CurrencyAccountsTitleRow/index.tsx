import { ReactElement } from "react"
import { H5, P14 } from "@/components/Typography"
import classes from "./style.module.scss"

export default function CurrencyAccountsTitleRow(): ReactElement {
  return (
    <>
      <H5>Валютні рахунки</H5>
      <P14 className={classes.subtitle}>Список рахунків створених користувачем.</P14>
    </>
  )
}
