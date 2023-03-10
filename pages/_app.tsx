//Type Imports
import type { AppProps } from "next/app";

//Imports
import "../styles/globals.css";
import Head from "next/head";
import { Fragment } from "react";

export default function App({ Component, pageProps }: AppProps) {
  if (typeof window !== "undefined") {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }

  return (
    <Fragment>
      <Head>
        <title>MoneyChart</title>
        <meta
          name="description"
          content="Keeping Track of Finances has never been easier"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}
