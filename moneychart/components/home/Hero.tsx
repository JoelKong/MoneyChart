import Image from "next/image";
import { BiLogIn } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";

export default function Hero({ moreDetails, login }: any): JSX.Element {
  return (
    <section className="w-full h-full flex justify-center items-center">
      <div className="w-2/4 h-2/4 flex flex-col justify-center items-center flex-grow">
        <div className="w-full flex items-center justify-center sm:text-6xl text-4xl">
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
        <div className="text-center tracking-wide pt-2 font-medium sm:text-2xl text-md">
          Tracking Finances have never been easier
        </div>
        <div className="flex flex-row justify-evenly sm:w-2/4 w-full pt-8">
          <button
            className="sm:w-48 w-32 h-10 rounded-lg bg-blue-400 hover:bg-blue-500 flex justify-center items-center"
            onClick={login}
          >
            <p className="pr-2 pb-[0.1rem]">Log In</p>
            <BiLogIn />
          </button>
          <button
            className="sm:w-48 w-32 h-10 rounded-lg bg-blue-400 hover:bg-blue-500 flex justify-center items-center"
            onClick={moreDetails}
          >
            <p className="pr-2 pb-[0.1rem]">More Details</p>
            <RiArrowRightSLine />
          </button>
        </div>
      </div>
    </section>
  );
}
