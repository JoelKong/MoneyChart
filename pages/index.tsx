import Header from "../components/landingpage/Header";
import Hero from "../components/landingpage/Hero";
import Bookkeeping from "../components/landingpage/Bookkeeping";
import TransactionManagement from "../components/landingpage/TransactionManagement";
import { samplePieData } from "../utils/charts/samplechart";

function LoginPage() {
  return (
    <main>
      <Header />
      <Hero />
      <Bookkeeping samplePieData={samplePieData} />
      <TransactionManagement />
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {
      samplePieData: samplePieData,
    },
  };
}

export default LoginPage;
