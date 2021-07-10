/**
 * Из масива слов делает одну строку
 * @param stringArr массив слов
 * @param symbol символ между словами
 */
export default function txtJoin(stringArr: string[], symbol: string = " "): string {
  let str: string = ""

  stringArr.forEach((el) => {
    if (typeof el === "string" && el !== "") {
      if (str === "") return (str = el)
      str = `${str}${symbol}${el}`
    }
  })

  return str
}
