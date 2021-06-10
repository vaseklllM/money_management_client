import { useEffect, useState } from "react"

/** Спрацьовує при зміні width або height елемента myRef і повертає новий розмір */
export default function useResize(myRef: React.MutableRefObject<any>) {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    function handleResize() {
      if (myRef) {
        setTimeout(() => {
          setWidth(myRef.current.offsetWidth)
          setHeight(myRef.current.offsetHeight)
        }, 0)
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [myRef])

  return { width, height }
}
