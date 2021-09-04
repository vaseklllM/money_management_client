import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { ReactElement } from "react"
import { AUTH, IAuth } from "./auth.gql"

interface Props {
  children: any
}

export default function AuthProvider({ children }: Props): ReactElement {
  const { data, loading } = useQuery<IAuth>(AUTH)
  const { route } = useRouter()

  if (loading) return null

  if ((!data && route === "/auth") || data) return children

  return null
}
