import Hero from "../../components/home/Hero";
import Header from "../../components/home/Header";

export default function Home() {
  return (
    <>
      <main className="w-screen h-screen fixed bg-gradient-to-br from-[#b6f492] to-[#338b93]">
        <Header />
        <Hero />
      </main>
    </>
  );
}
