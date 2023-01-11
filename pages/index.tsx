import Hero from "../components/landingpage/Hero";
import Bookkeeping from "../components/landingpage/Bookkeeping";
import TransactionManagement from "../components/landingpage/TransactionManagement";

function LoginPage() {
  return (
    <main className="background">
      <Hero />
      <Bookkeeping />
      <TransactionManagement />
    </main>
  );
}

export default LoginPage;
