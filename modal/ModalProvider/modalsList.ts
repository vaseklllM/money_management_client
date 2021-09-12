import {
  CreatingNewCurrencyAccount,
  EditCurrencyAccount,
  editCurrencyAccountProps,
  AddWalletAction,
  AddWalletActionProps,
} from "../modals"

/** перечисление модальных окон */
export enum enumModal {
  creatingNewCurrencyAccount,
  editCurrencyAccount,
  addWalletAction,
}

/** Связи модальных окон с перечислением модальных окон */
export const modalsList = {
  [enumModal.creatingNewCurrencyAccount]: CreatingNewCurrencyAccount,
  [enumModal.editCurrencyAccount]: EditCurrencyAccount,
  [enumModal.addWalletAction]: AddWalletAction,
}

/** Связи пропсов с перечислением модальных окон */
export interface modalsDataInterfaces {
  [enumModal.creatingNewCurrencyAccount]: any
  [enumModal.editCurrencyAccount]: editCurrencyAccountProps
  [enumModal.addWalletAction]: AddWalletActionProps
}
