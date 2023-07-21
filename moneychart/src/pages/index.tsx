import Hero from "../../components/home/Hero";
import Header from "../../components/home/Header";
import Bookkeeping from "../../components/home/Bookkeeping";

export default function Home() {
  return (
    <>
      <main className="w-screen h-screen fixed bg-gradient-to-br from-[#b6f492] to-[#338b93] overflow-y-scroll snap-y snap-mandatory">
        <div className="snap-center w-full h-full">
          <Header />
          <Hero />
        </div>
        <div className="snap-center w-full h-full">
          <Bookkeeping />
        </div>
      </main>
    </>
  );
}
