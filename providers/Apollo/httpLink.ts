import { createHttpLink } from "@apollo/client"

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
  // credentials: "include",
  credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
})

export default httpLink
