import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="h-16 border border-black flex items-center justify-center ">
        <h1 className="flex text-bold">header</h1>
      </div>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
