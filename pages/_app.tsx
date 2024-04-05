import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Navbar from "@/components/Modules/Navbar/Navbar";
import Footer from "@/components/Modules/Footer/Footer";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="light">
          <div className="mt-4">
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </div>
          <Toaster position="top-center" />
        </NextThemesProvider>
      </NextUIProvider>
    </>
  );
}
