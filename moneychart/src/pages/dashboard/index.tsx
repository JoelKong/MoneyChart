import Hero from "../../../components/home/Hero";
import Header from "../../../components/home/Header";
import Bookkeeping from "../../../components/home/Bookkeeping";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home({ param }: any) {
  const router = useRouter();
  const moreDetailsRef = useRef<any>();

  function moreDetails(): any {
    moreDetailsRef.current.scrollBy({
      top: 1,
      left: 0,
      behavior: "smooth",
    });
  }

  async function getAccessToken() {
    const sandboxClientID = "c871240c-d971-4b74-9b13-4be5b3a27bd1";
    const sandboxClientSecret = "62813690-4c56-4e4c-8634-3f232edf516c";
    const authCode = btoa(`${sandboxClientID}:${sandboxClientSecret}`);
    const redirectURL = "localhost:3000/dashboard";  //https://www.dbs.com/developers/#/all-products/play-ground
    const code:any = router.query.code;
    const grantType = 'token'
    const authHeader = `Basic ${authCode}`
    const requestBody = `code=${encodeURIComponent(code)}&redirect_uri=${encodeURIComponent(redirectURL)}&grant_type=${encodeURIComponent(grantType)}`
    // let fetchToken = {
    //   method: "POST",
    //   body: `code=${code}&grant_type=authorization_code&redirect_uri=${redirectURL}`,
    //   headers: {
    //     'authorization' : `Basic ${authCode}`,
    //     'content-type': 'application/x-www-form-urlencoded',
    //     'cache-control': 'no-cache',
    //     'accept': 'application/json',
    //   },
    // };
    let response = await fetch(
      "https://www.dbs.com/sandbox/api/sg/v1/oauth/tokens", {
        method: 'POST',
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: requestBody
      }
    );
    let parsed = await response.json()
    console.log(parsed)

    return;
  }

  return (
    <>
      <main
        className="w-screen h-screen bg-gradient-to-br from-[#b6f492] to-[#338b93] overflow-y-scroll snap-y snap-mandatory"
        ref={moreDetailsRef}
      >
        <div className="snap-center w-full h-full">
          <button className="w-12 h-12 border-2" onClick={getAccessToken}>
            Get token
          </button>
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
