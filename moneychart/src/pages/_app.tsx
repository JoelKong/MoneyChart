import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="w-screen h-screen bg-gradient-to-br from-[#b6f492] to-[#338b93]">
      <Component {...pageProps} />
    </main>
  );
}
