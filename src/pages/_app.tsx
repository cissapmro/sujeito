import type { AppProps } from "next/app";
import '../styles/global.scss';
import { Header } from "@/componentes/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <Header />
    <Component {...pageProps} />
    </>
  );
}

