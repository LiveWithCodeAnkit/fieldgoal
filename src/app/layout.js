import "./globals.css";
import { Inter } from "next/font/google";
import HeadBarLine from "@/components/header/headBarLine/HeadBarLine";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LiveWithCodeAnkit",
  description: "live_ankit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.Inter} bg-gray`}>
        <HeadBarLine />
        {children}
       
      </body>
    </html>
  );
}
