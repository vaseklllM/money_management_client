interface IOptions {
  fixedNumbers?: number /** кількість цифр після коми */
  notMinus?: boolean /** true - тільки додатні цифри */
}

/** парсер для інпута для ввода тільки цифр */
export default function parseInputFloat(str: string, options: IOptions = {}): string {
  const { fixedNumbers, notMinus = false } = options

  let valueNum = parseFloat(str)

  if (typeof valueNum === "number" && !isNaN(valueNum)) {
    if (!str.includes(".")) {
      if (notMinus) return String(Math.abs(valueNum))
      return String(valueNum)
    } else return convertDot({ str, fixedNumbers, notMinus })
  } else if (str === "" || (!notMinus && str === "-")) return str

  return "0"
}

interface IConvertDot {
  str: string
  fixedNumbers?: number
  notMinus?: boolean
}

function convertDot(params: IConvertDot): string {
  const { str, fixedNumbers, notMinus } = params

  const isNum = (n) => typeof n === "number" && !isNaN(n)

  let isFirstDot = false

  let newStrArr = []

  for (let i = 0; i < str.length; i++) {
    const el = str[i]

    if (!notMinus && i === 0 && el === "-") {
      newStrArr.push(el)
    }

    if (isNum(parseInt(el)) || el === ".") {
      if (isFirstDot) {
        if (el !== ".") newStrArr.push(el)
      } else {
        newStrArr.push(el)
      }
    }
    if (el === ".") isFirstDot = true
  }

  if (typeof fixedNumbers === "number" && fixedNumbers > 0) {
    return convertFixedNumbers(newStrArr, fixedNumbers)
  }

  return newStrArr.join("")
}

/** ставит ограничение после запятой */
function convertFixedNumbers(arr: string[], fixedNumbers: number): string {
  return arr.filter((_, idx) => idx < arr.indexOf(".") + fixedNumbers + 1).join("")
}
