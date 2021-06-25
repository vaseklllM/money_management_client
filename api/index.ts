import getUserInfo from "./banks/monobank/getUserInfo"
import addMonobankToken from "./banks/monobank/addMonobankToken"
import getAllCards from "./banks/getAllCards"

const api = {
  /** блок фінансів */
  finance: {
    banks: {
      /** Повертає список банківських карт */
      getAllCards,
      monobank: {
        getUserInfo,
        /** добавлення токена від монобанку */
        addMonobankToken,
      },
    },
  },
}

export default api
