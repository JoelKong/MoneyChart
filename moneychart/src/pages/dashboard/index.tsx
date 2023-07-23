import Hero from "../../../components/home/Hero";
import Header from "../../../components/home/Header";
import Bookkeeping from "../../../components/home/Bookkeeping";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const moreDetailsRef = useRef<any>();
  const [monthlyDebitAndCredit, setMonthlyDebitAndCredit] = useState(null);

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

export async function getServerSideProps(context: any) {
  const sandboxClientID = "c871240c-d971-4b74-9b13-4be5b3a27bd1";
  const partyId = context.query.party_id;
  const accessToken = context.query.access_token;
  const fetchData = await fetch("http://localhost:3000/api/chartdata", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      clientId: sandboxClientID,
      partyId: partyId,
      accessToken: accessToken,
    }),
  });

  const chartData = await fetchData.json();
  console.log(chartData);

  return { props: { chartData } };
}
