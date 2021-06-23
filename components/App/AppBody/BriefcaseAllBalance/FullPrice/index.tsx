import { useQuery } from "@apollo/client"
import { Statistic } from "antd"
import { ReactElement } from "react"
import CURRENCY_ACCOUNTS from "../../../currencyAccounts.gql"
import BANK_CARDS from "./bankcards.gql"

interface ICA {
  currencyAccounts: {
    id: string
    value: number
    currency: {
      historyCourseInUAH: {
        price: number
      }[]
    }
  }[]
}

interface ICAVariables {
  numberOfHistoryItems: number
}

interface IBC {
  bankcards: {
    monobank: {
      historyCards: {
        cards: {
          balance: number
          currency: {
            historyCourseInUAH: {
              price
            }[]
          }
        }[]
      }[]
    }
  }
}

export default function FullPrice(): ReactElement {
  const { data: CAData, loading: CALoading } = useQuery<ICA, ICAVariables>(
    CURRENCY_ACCOUNTS,
    {
      variables: {
        numberOfHistoryItems: 0,
      },
    }
  )
  const { data: BCData, loading: BCLoading } = useQuery<IBC>(BANK_CARDS)

  if (CALoading || !BCData || BCLoading || !BCData) return null

  const CAPrice = CAFullPrice(CAData)
  const BCPrice = BCFullPrice(BCData)

  const price = CAPrice + BCPrice

  const numberFormat = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "UAH",
    currencyDisplay: "narrowSymbol",
  })

  return <Statistic title='Вартість всіх рахунків' value={numberFormat.format(price)} />
}

function CAFullPrice(data: ICA): number {
  let price = 0

  data.currencyAccounts.forEach((currencyAccount) => {
    price =
      price + currencyAccount.value * currencyAccount.currency.historyCourseInUAH[0].price
  })

  return price
}

function BCFullPrice(data: IBC): number {
  let price = 0

  if (data.bankcards.monobank) {
    data.bankcards.monobank.historyCards[0].cards.forEach((card) => {
      if (card.balance !== 0) {
        price = price + card.balance * card.currency.historyCourseInUAH[0].price
      }
    })
  }

  return price
}
