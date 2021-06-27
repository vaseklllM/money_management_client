import { initializeApollo } from "@/providers/Apollo/apolloClient"
import { shallow, mount } from "enzyme"
// import CURRENCIES from "../currencies.gql"
import { MockedProvider } from "@apollo/client/testing"
import { act } from "react-dom/test-utils"

import PostItem from "."
import { CURRENCIES } from "../currencies.gql"

const mockData = {
  request: {
    query: CURRENCIES,
  },
  result: {
    data: {
      currencyAccounts: [{ id: 0, code: "test1" }],
    },
  },
}

describe("With Post", () => {
  it('App shows "A simple example repo" in a <p> tag', async () => {
    // const app = shallow(
    //   <MockedProvider mocks={[mockData]}>
    //     <PostItem text='t1' />
    //   </MockedProvider>
    // )

    // expect(app).toBeTruthy()
    // expect(app.find("span")).toHaveText("t1")
    // expect(app.find(".t1")).toHaveTextContent("test1", { normalizeWhitespace: false })

    // let wrapper
    // await act(async () => {
    //   wrapper = shallow(
    //     <MockedProvider /* addTypename={false} */ mocks={[mockData]}>
    //       <PostItem />
    //     </MockedProvider>
    //   )
    // })

    // await act(() => wait(0))

    // wrapper.update()

    // // console.log(wrapper.find("span"))

    // expect(wrapper.find("span")).toEqual("test1")

    const text = "asdafqwerqwrtqw"
    const app = shallow(<PostItem text={text} />)
    expect(app.find("span").text()).toEqual(text)
  })
})
