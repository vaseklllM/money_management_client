import React, { ReactElement, useContext } from "react"
import { PostPageContext } from ".."

export default function PostItem(): ReactElement {
  const {
    currencies: { data, loading },
  } = useContext(PostPageContext)

  // console.log("update")

  if (loading) return <pre>loading</pre>

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
