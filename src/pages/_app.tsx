import { AlertProvider } from "@/context/alertContext";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AlertProvider>
      <Component {...pageProps} />
    </AlertProvider>
  )
}
