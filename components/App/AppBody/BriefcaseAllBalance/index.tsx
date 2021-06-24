import ContentBlock from "@/components/finance/ContentBlock"
import { Row } from "antd"
import { ReactElement } from "react"
import FullPrice from "./FullPrice"

export default function BriefcaseAllBalance(): ReactElement {
  return (
    <ContentBlock>
      <Row>
        <FullPrice />
      </Row>
    </ContentBlock>
  )
}
