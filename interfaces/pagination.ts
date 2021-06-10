export interface IPagination {
  page: number /** активна сторінка пагінації */
  amountOfElements: number /** загальна кількість елементів */
  amountOfElementsByPage: number /** кількість елементів на сторінці */
  numberOfPages: number /** кількість сторінок */
}
