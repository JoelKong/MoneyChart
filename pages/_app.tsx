import Head from "next/head";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import { Fragment } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>MoneyChart</title>
        <meta name="description" content="Visualising data through charts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}
