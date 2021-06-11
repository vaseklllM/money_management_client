import CURRENCY_ACCOUNTS from "./currencyAccounts.gql"
import BANK_CARDS from "./bankcards.gql"
import { useQuery } from "@apollo/client"
import { ICurrencyRatioData } from "../CurrencyRatio/interface"

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

interface IResData {
  loading: boolean
  data: ICurrencyRatioData[]
}

export default function useCurrencyRatioData(): IResData {
  const { data: CAData, loading: CALoading } = useQuery<ICA>(CURRENCY_ACCOUNTS)
  const { data: BCData, loading: BCLoading } = useQuery<IBC>(BANK_CARDS)

  if (CALoading || BCLoading) return { data: null, loading: true }

  const data: ICurrencyRatioData[] = convertBCData(BCData, convertCAData(CAData)).filter(
    (i) => i.value > 0
  )

  return { data, loading: false }
}

function convertCAData(CAData: ICA): ICurrencyRatioData[] {
  let data: ICurrencyRatioData[] = []

  CAData.currencyAccounts.forEach((el) => {
    const dataEl = data.find((i) => i.symbol === el.currency.symbol)
    if (!dataEl) {
      data.push({
        code: el.currency.code,
        symbol: el.currency.symbol,
        value: el.value,
        uahValue: el.value * el.currency.historyCourseInUAH[0].price,
      })
    } else {
      dataEl.value = dataEl.value + el.value
      dataEl.uahValue = dataEl.uahValue + el.value * el.currency.historyCourseInUAH[0].price
    }
  })

  return data
}

function convertBCData(BCData: IBC, data: ICurrencyRatioData[]): ICurrencyRatioData[] {
  BCData.bankcards.monobank.historyCards[0].cards.forEach((el) => {
    const dataEl = data.find((i) => i.symbol === el.currency.symbol)
    if (!dataEl) {
      data.push({
        code: el.currency.code,
        symbol: el.currency.symbol,
        value: el.balance,
        uahValue: el.balance * el.currency.historyCourseInUAH[0].price,
      })
    } else {
      dataEl.value = dataEl.value + el.balance
      dataEl.uahValue =
        dataEl.uahValue + el.balance * el.currency.historyCourseInUAH[0].price
    }
  })

  return data
}
