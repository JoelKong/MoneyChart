import Hero from "../../components/home/Hero";
import Header from "../../components/home/Header";
import Bookkeeping from "../../components/home/Bookkeeping";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const moreDetailsRef = useRef<any>();

  function moreDetails(): any {
    moreDetailsRef.current.scrollBy({
      top: 1,
      left: 0,
      behavior: "smooth",
    });
  }

  function login() {
    // iw036, 123456
    router.push(
      "https://www.dbs.com/sandbox/api/sg/v1/oauth/authorize?client_id=c871240c-d971-4b74-9b13-4be5b3a27bd1&redirect_uri=http://localhost:3000/api/accesstoken&scope=Read&response_type=code&state=0399"
    );
    return;
  }

  return (
    <>
      <main
        className="w-screen h-screen bg-gradient-to-br from-[#b6f492] to-[#338b93] overflow-y-scroll snap-y snap-mandatory"
        ref={moreDetailsRef}
      >
        <div className="snap-center w-full h-full">
          <Header login={login} />
          <Hero moreDetails={moreDetails} login={login} />
        </div>
        <div className="snap-center w-full h-full">
          <Bookkeeping />
        </div>
      </main>
    </>
  );
}
