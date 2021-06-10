import FinanceContentBlock from "@/components/finance/FinanceContentBlock"
import { Row } from "antd"
import { ReactElement } from "react"
import FullPrice from "./FullPrice"

export default function BriefcaseAllBalance(): ReactElement {
  return (
    <FinanceContentBlock>
      <Row>
        <FullPrice />
      </Row>
    </FinanceContentBlock>
  )
}
