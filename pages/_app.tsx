import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Navbar from "@/components/Modules/Navbar/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="light">
          <div className="mt-4">
            <Navbar />
            <Component {...pageProps} />
          </div>
        </NextThemesProvider>
      </NextUIProvider>
    </>
  );
}
