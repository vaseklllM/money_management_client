interface IParams {
  start?: number
  end?: number
  step?: number
}

type IFn = (idx: number) => any

export default function getArrByLength(
  { start = 1, end, step }: IParams,
  fn?: IFn
): Array<any> {
  const isFn = typeof fn === "function"
  let arr = []
  for (let i = start; i <= end; i++) {
    if (typeof step === "number") {
      if (i % step === 0) {
        arr.push(isFn ? fn(i) : i)
      }
    } else {
      arr.push(isFn ? fn(i) : i)
    }
  }
  return arr
}
