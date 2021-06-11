import React, { ReactElement } from "react"
import CurrencyRatioBody from "./CurrencyRatioBody"
import { ICurrencyRatioData } from "./interface"
import CURRENCY_ACCOUNTS from "./currencyAccounts.gql"
import BANK_CARDS from "./bankcards.gql"
import { useQuery } from "@apollo/client"

interface ICurrency {
  code: string
  symbol: string
  historyCourseInUAH: {
    price: number
  }[]
}

interface ICA {
  currencyAccounts: {
    id: string
    value: number
    currency: ICurrency
  }[]
}

interface IBC {
  bankcards: {
    monobank: {
      historyCards: {
        cards: {
          balance: number
          currency: ICurrency
        }[]
      }[]
    }
  }
}

export default function CurrencyRatio(): ReactElement {
  const { data: CAData, loading: CALoading } = useQuery<ICA>(CURRENCY_ACCOUNTS)
  const { data: BCData, loading: BCLoading } = useQuery<IBC>(BANK_CARDS)

  if (CALoading || BCLoading) return null

  const data: ICurrencyRatioData[] = convertBCData(BCData, convertCAData(CAData)).filter(
    (i) => i.value > 0
  )

  if (data.length < 2) return null

  return (
    <div>
      <CurrencyRatioBody data={data} />
    </div>
  )
}

function convertCAData(CAData: ICA): ICurrencyRatioData[] {
  let data: ICurrencyRatioData[] = []

  CAData.currencyAccounts.forEach((el) => {
    const dataEl = data.find((i) => i.symbol === el.currency.symbol)
    if (!dataEl) {
      data.push({ code: el.currency.code, symbol: el.currency.symbol, value: el.value })
    } else {
      dataEl.value = dataEl.value + el.value
    }
  })

  return data
}

function convertBCData(BCData: IBC, data: ICurrencyRatioData[]): ICurrencyRatioData[] {
  BCData.bankcards.monobank.historyCards[0].cards.forEach((el) => {
    const dataEl = data.find((i) => i.symbol === el.currency.symbol)
    if (!dataEl) {
      data.push({ code: el.currency.code, symbol: el.currency.symbol, value: el.balance })
    } else {
      dataEl.value = dataEl.value + el.balance
    }
  })

  return data
}
