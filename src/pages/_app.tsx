import Layout from "@/components/layout";
import type { AppProps } from "next/app";
import "./globals.css";
import { ThemeProvider } from "@material-tailwind/react";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // Chọn trọng lượng mong muốn
  variable: "--font-montserrat", // Đặt tên biến CSS
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout customClass={`${montserrat.variable}`}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
