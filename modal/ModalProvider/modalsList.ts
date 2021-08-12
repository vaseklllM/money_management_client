import {
  CreatingNewCurrencyAccount,
  creatingNewCurrencyAccountProps,
  EditCurrencyAccount,
  editCurrencyAccountProps,
} from "../modals"

/** перечисление модальных окон */
export enum enumModal {
  creatingNewCurrencyAccount,
  editCurrencyAccount,
}

/** Связи модальных окон с перечислением модальных окон */
export const modalsList = {
  [enumModal.creatingNewCurrencyAccount]: CreatingNewCurrencyAccount,
  [enumModal.editCurrencyAccount]: EditCurrencyAccount,
}

/** Связи пропсов с перечислением модальных окон */
export interface modalsDataInterfaces {
  [enumModal.creatingNewCurrencyAccount]: creatingNewCurrencyAccountProps
  [enumModal.editCurrencyAccount]: editCurrencyAccountProps
}
