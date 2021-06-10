import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()

export default function onStart() {
  addTokenToConfig()
}

/** установка токена в конфиг якщо він є */
function addTokenToConfig() {
  // console.log(1, publicRuntimeConfig)
  if (typeof window !== "undefined") {
    // const token = localStorage.getItem("token")
    // if (typeof token === 'string' && token !== '') {
    //   console.log('object')
    //   publicRuntimeConfig.token = token
    // }
  }
}
