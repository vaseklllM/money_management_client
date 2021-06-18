import "../styles/globals.css"
import "antd/dist/antd.css" /** стили Ant Design */

import Apollo from "@/providers/Apollo"
import { ButtonCircleAdd } from "@/components/Buttons"
import { ReactElement } from "react"
import Head from "next/head"

export default function MyApp({ Component, pageProps }): ReactElement {
  return (
    <Apollo pageProps={pageProps}>
      <Head>
        <title>Веб-додаток для аналізу курсів та особистих рахунків</title>
      </Head>
      <Component {...pageProps} />
      <ButtonCircleAdd />
    </Apollo>
  )
}
