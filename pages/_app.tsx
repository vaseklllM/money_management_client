import "../styles/globals.css"
import "antd/dist/antd.css" /** стили Ant Design */

import Apollo from "@/providers/Apollo"
import { ReactElement } from "react"
import Head from "next/head"
import LoaderIndicator from "@/components/LoaderIndicator"
import Message from "@/components/Message"

export default function App({ Component, pageProps }): ReactElement {
  return (
    <Apollo pageProps={pageProps}>
      <Head>
        <title>Веб-додаток для аналізу курсів та особистих рахунків</title>
      </Head>
      <Component {...pageProps} />
      <LoaderIndicator />
      <Message />
    </Apollo>
  )
}
