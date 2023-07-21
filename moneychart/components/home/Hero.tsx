import Image from "next/image";
import { BiLogIn } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";

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
          <button className="w-1/4 h-10 rounded-lg bg-blue-400 hover:bg-blue-500 flex justify-center items-center">
            <p className="pr-2 pb-[0.1rem]">Log In</p>
            <BiLogIn />
          </button>
          <button className="w-1/4 h-10 rounded-lg bg-blue-400 hover:bg-blue-500 flex justify-center items-center">
            <p className="pr-2 pb-[0.1rem]">More Details</p>
            <RiArrowRightSLine />
          </button>
        </div>
      </div>
    </section>
  );
}
