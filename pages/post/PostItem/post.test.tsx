import { initializeApollo } from "@/providers/Apollo/apolloClient"
import { shallow } from "enzyme"
import CURRENCIES from "../currencies.gql"

import PostItem from "."

describe("With Post", () => {
  it('App shows "A simple example repo" in a <p> tag', async () => {
    const text = "asdafqwerqwrtqw"
    const app = shallow(<PostItem text={text} />)
    expect(app.find("span").text()).toEqual(text)
  })
})
