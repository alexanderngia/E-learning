import Layout from "@/components/layout";
import type { AppProps } from "next/app";
import "./globals.css";


import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // Chọn trọng lượng mong muốn
  variable: "--font-montserrat", // Đặt tên biến CSS
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={montserrat.variable}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
