import Image from "next/image";

export default function Hero(): JSX.Element {
  return (
    <section className="w-full h-full flex justify-center items-center">
      <div className="w-2/4 h-2/4 flex flex-col justify-center items-center">
        <div className="w-full flex items-center justify-center text-6xl">
          <Image
            src="/moneychartt.png"
            alt="moneychart"
            height={50}
            width={50}
          />
          <span className="p-4 tracking-wide font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
            MoneyChart
          </span>
        </div>
        <div className="text-center tracking-wide pt-2 font-medium text-2xl">
          Tracking Finances have never been easier
        </div>
        <div className="flex flex-row justify-evenly w-full pt-8">
          <button className="w-1/4 h-8 rounded-lg bg-blue-400 hover:bg-blue-500">
            Log In
          </button>
          <button className="w-1/4 h-8 rounded-lg bg-blue-400 hover:bg-blue-500">
            More details
          </button>
        </div>
      </div>
    </section>
  );
}
