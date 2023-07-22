import Image from "next/image";

export default function Header({ login }: any): JSX.Element {
  return (
    <header className="fixed flex w-full justify-between items-center pl-4 pt-2 z-10">
      <Image
        src="/moneychartt.png"
        alt="moneychart"
        height={50}
        width={50}
        className="hover: cursor-pointer"
      />
      <button
        className="mr-4 w-32 h-12 tracking-wide font-semibold rounded-lg transition ease-in-out bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        onClick={login}
      >
        Log In
      </button>
    </header>
  );
}
