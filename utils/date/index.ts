import { format } from "date-fns"
import { ru } from "date-fns/locale"

const date = {
  convertToShowFullFormat: (date) => format(new Date(date), "dd MMM yyyy kk:mm", { locale: ru }),
  convertToShowSchedule: (date) => format(new Date(date), "dd MMM", { locale: ru }),
}

export default date
