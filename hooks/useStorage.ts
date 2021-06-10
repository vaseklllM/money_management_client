import { useEffect } from "react"

export default function useStorage(storageName, callback) {
  // const checkStorage = (key) => {
  //   const storedData = localStorage.getItem(key)
  //   console.log(storedData)
  //   if (!storedData) console.log("Local storage is empty")
  // }

  function changeValue() {
    console.log("change storage")
    // const storedData = localStorage.getItem(storageName)
    // callback({ value: storedData })
  }

  useEffect(() => {
    // when app loaded
    // checkStorage(storageName)
    // console.log("update")

    // console.log(window)

    // when storage updated
    // const handler = ({ key }) => checkStorage(key)
    window.addEventListener("storage", changeValue)
    return () => window.removeEventListener("storage", changeValue)
  }, [localStorage.getItem("token")])
}
