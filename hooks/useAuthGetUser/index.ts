import { OperationVariables, QueryLazyOptions, useLazyQuery } from "@apollo/client"
import { USER } from "./user.gql"

interface IUserData {
  user: {
    id: string
  }
}

interface IUseAuthGetUserReturn {
  getUser: (options?: QueryLazyOptions<OperationVariables>) => void
}

/** завантажує дані користувача після авторизації або реєстрації */
export default function useAuthGetUser(): IUseAuthGetUserReturn {
  const [getUser] = useLazyQuery<IUserData>(USER, {
    fetchPolicy: "cache-and-network",
  })

  return { getUser }
}
