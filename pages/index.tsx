import dynamic from "next/dynamic";
import Header from "../components/global/Header";
import Hero from "../components/landingpage/Hero";
const DynamicBookkeeping = dynamic(
  () => import("../components/landingpage/Bookkeeping"),
  {
    loading: (): any => "Loading...",
  }
);
import TransactionManagement from "../components/landingpage/TransactionManagement";
import { samplePieData } from "../utils/charts/samplechart";

function LoginPage() {
  return (
    <main>
      <Header />
      <Hero />
      <DynamicBookkeeping samplePieData={samplePieData} />
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
