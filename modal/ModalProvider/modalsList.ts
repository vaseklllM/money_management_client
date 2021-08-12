import { CreatingNewCurrencyAccount, EditCurrencyAccount } from "../modals"

export enum enumModal {
  creatingNewCurrencyAccount,
  editCurrencyAccount,
}

export const modalsList = {
  [enumModal.creatingNewCurrencyAccount]: CreatingNewCurrencyAccount,
  [enumModal.editCurrencyAccount]: EditCurrencyAccount,
}

