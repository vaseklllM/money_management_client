import { shallow } from "enzyme"
// import React from "react"

import PostItem from "."

describe("With Enzyme", () => {
  it('App shows "A simple example repo" in a <p> tag', () => {
    const app = shallow(<PostItem />)
    expect(app.find("p").text()).toEqual("test1")
  })
})
