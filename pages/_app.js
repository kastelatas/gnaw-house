import NextNProgress from "nextjs-progressbar";
import {wrapper} from "../src/redux/store";

import '../src/styles/index.scss'

function MyApp({Component, pageProps}) {
  return (
    <>
      <NextNProgress
        color="#CFF69B"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(MyApp)
