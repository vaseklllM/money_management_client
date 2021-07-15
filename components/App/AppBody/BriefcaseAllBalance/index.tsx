import ContentBlock from "@/components/finance/ContentBlock"
import { ReactElement } from "react"
import FullPrice from "./FullPrice"

export default function BriefcaseAllBalance(): ReactElement {
  return (
    <ContentBlock>
      <FullPrice />
    </ContentBlock>
  )
}
