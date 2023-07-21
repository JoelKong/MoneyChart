import Hero from "../../components/home/Hero";
import Header from "../../components/home/Header";
import Bookkeeping from "../../components/home/Bookkeeping";
import { useRef } from "react";

export default function Home() {
  const moreDetailsRef = useRef<any>();

  function moreDetails(): any {
    moreDetailsRef.current.scrollBy({
      top: 1,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <main
        className="w-screen h-screen bg-gradient-to-br from-[#b6f492] to-[#338b93] overflow-y-scroll snap-y snap-mandatory"
        ref={moreDetailsRef}
      >
        <div className="snap-center w-full h-full">
          <Header />
          <Hero moreDetails={moreDetails} />
        </div>
        <div className="snap-center w-full h-full">
          <Bookkeeping />
        </div>
      </main>
    </>
  );
}
