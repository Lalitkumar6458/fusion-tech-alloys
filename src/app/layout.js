import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Base/Header";
import Footer from "@/components/Base/Footer";
import TopInfo from "@/components/Base/TopInfo";
import NavBar from "@/components/Base/NavBar";
import ScrollToTopButton from "@/components/Base/ScrollTopBtn";
import Whatsappbtn from "@/components/Base/Whatsappbtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fusion Tech alloys",
  description: "Fusion Tech alloys",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
 <NavBar/>
      {children}
      <Footer/>
      <Whatsappbtn/>
      <ScrollToTopButton/>
      </body>
    </html>
  );
}
