import Header from "../../components/global/Header";
import Charts from "../../components/homepage/Charts";
import Head from "next/head";
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <Head>
        <meta
          name="description"
          content="Dashboard for the Tracking of Expenses"
        />
      </Head>
      <Header />
      <Charts />
    </Fragment>
  );
}

export default HomePage;
