import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Base/Header";
import Footer from "@/components/Base/Footer";
import TopInfo from "@/components/Base/TopInfo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fusion Tech alloys",
  description: "Fusion Tech alloys",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
      <TopInfo/>
      <Header/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
