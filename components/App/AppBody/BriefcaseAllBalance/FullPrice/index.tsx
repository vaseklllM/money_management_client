import { useQuery } from "@apollo/client"
import { Col, Statistic } from "antd"
import { ReactElement } from "react"
import CURRENCY_ACCOUNTS from "./currencyAccounts.gql"
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
  const { data: CAData, loading: CALoading } = useQuery<ICA>(CURRENCY_ACCOUNTS)
  const { data: BCData, loading: BCLoading } = useQuery<IBC>(BANK_CARDS)

  if (CALoading || BCLoading) return null

  const CAPrice = CAFullPrice(CAData)
  const BCPrice = BCFullPrice(BCData)

  const price = CAPrice + BCPrice

  const numberFormat = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "UAH",
  })

  return (
    <Col span={8}>
      <Statistic title='Вартість всіх рахунків' value={numberFormat.format(price)} />
    </Col>
  )
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
