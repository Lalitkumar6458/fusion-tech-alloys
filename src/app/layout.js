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
  title: "Fusion Tech Alloys | Premier Industrial Tubing, Pipe, and Fittings,fasteners Supplier",
  description: "Fusion Tech Alloys is the most acclaimed manufacturer, exporter, distributor, and supplier of industrial Tubing, Pipe, Bar, Round Bar, Bright Finish Bar, dairy fittings, and pipe fittings, complete with required test certificates. We are a leading pipe supplier in Mumbai and a tube stockist in Pune. Our extensive product range includes stainless steel pipes and tubes, buttweld fittings, flanges, socketweld fittings, screwed fittings, fasteners, and valves. We proudly serve various locations including Rajkot, Gujarat, India, and the UAE.",
  icons: {
    icon: '/Fevicon/favicon-16x16.png', // /public path
  },
  keywords: [
    "Fusion Tech Alloys",
    "Manufacturer of nuts and bolts",
    "fasteners",
    "high-quality fasteners",
    "nuts and bolts",
    "washers",
    "screws and rivets",
    "socket fasteners",
    "Mumbai fasteners",
    "construction fasteners",
    "equipment fasteners",
    "high-performance alloys",
    "industrial fasteners",
    "anchor fasteners",
    "anti-theft fasteners",
    "specialty fasteners",
    'dairy fettings', 
    'pharma fettings', 'Stainless Steel Pipe', 'SS Pipe Fittings', 'API 5l Grade B Pipe', 'Inconel 600 Pipe', 
    'Inconel 601 Pipe', 'Inconel 625 Pipe', 'Incoloy 800 Pipe', 'Incoloy 825 Pipe', 'Inconel 600 Tube', 
    'Inconel 601 Tube', 'Inconel 625 Tube', 'Incoloy 800 Tube', 'Incoloy 825 Tube', 'Hastelloy C276 Pipe', 
    'Hastelloy C276 Tube', 'Inconel 600 Tubing', 'Inconel 601 Tubing', 'Inconel 625 Tubing', 'Inconel Flanges', 
    'inconel 600 flanges', 'inconel 625 flanges', 'Hastelloy Flanges', 'Hastelloy c276 flange', 'Hastelloy c22 flanges', 
    'API 5L GR. B EFW Line Pipe', 'API 5L GR. B ERW Pipe', 'API 5L GR. B HSAW Pipe', 'API 5L GR. B IBR Pipe', 
    'API 5L GR. B LSAW Pipe', 'API 5L GR. B SAW Pipe', 'API 5L GR. B Seamless Pipe', 'API 5L GR. B Welded Pipe', 
    'API Steel Brand Pipe', 'Sour Service Line Pipe', 'Offshore Line Pipe', 'API 5L X42 Seamless Pipe', 
    'API 5L X46 Seamless Pipe', 'API 5L X52 Seamless Pipe', 'API 5L X56 Seamless Pipe', 'API 5L X60 Seamless Pipe', 
    'API 5L X65 Seamless Pipe', 'API 5L X70 Seamless Pipe', 'API 5L GR.B PSL 2 Pipe', 'API 5L X42 PSL2 Pipe', 
    'API 5L X46 PSL2 Pipe', 'Stainless Steel Pipe Fittings', 'ss buttweld fittings', 'ss forged fittings manufacturers India', 
    'Stainless Steel Flanges', 'ss blind flange', 'ss flanges price', 'SS seamless pipe', 'Stainless steel seamless tube price', 
    'Stainless steel 304 pipe', 'Stainless Steel 304 tube manufacturers', 'SS 304l tube manufacturers', 'Stainless Steel 304L pipe', 
    '316 stainless tube supplier', 'SS 316l pipe', 'Stainless steel 317 tube suppliers', '321 stainless steel pipe Manufacturers', 
    '310 stainless steel pipe Manufacturers', 'SS 446 pipe', 'ss 904l pipe manufacturer', 'SS 347 pipe Manufacturer', 
    'duplex steel 2205 pipe', 'ASTM A106 Grade B Seamless Pipe', 'ASTM A106 Grade B Pipe', 'Inconel Pipe Fittings', 
    'Inconel 600 Pipe Fittings', 'Inconel 625 Pipe fittings', 'Hastelloy Pipe fittings', 'Hastelloy c276 pipe fittings', 
    'Hastelloy c22 pipe fittings', '317 SS pipe', '316l ss tubing suppliers', 'stainless steel 316l tube price', 'ss 316 tubing', 
    'Stainless Steel 316 seamless pipe price', 'ss 304 seamless tube price', '304L stainless steel tubing price list', 
    'alloy steel pipe fittings', 'alloy steel buttweld fittings', 'alloy steel forged fittings manufacturers', 
    'carbon steel pipe fittings', 'carbon steel buttweld fittings', 'carbon steel forged fittings', 'Alloy Steel flanges', 
    'Alloy Steel Forged Steel Flanges manufacturers', 'ASTM A182 F22 flanges', 'Carbon steel flanges', 'carbon steel blind flanges', 
    'carbon steel threaded flanges', 'Stainless steel pipe manufacturers in india', 'SS 317 tubing price', 
    'Stainless steel 317L pipe manufacturers', 'SS 317L seamless pipe suppliers', 'Stainless Steel 317L tube price', 
    'ss 321 pipe', '321 stainless steel tubing price', 'ss 310 pipe', '310 stainless steel tubing price', 'ss 410 pipe', 
    'stainless steel 410 tube manufacturer', '410 stainless steel pipe prices', 'stainless steel 446 suppliers', 
    '446 stainless steel tube price', '347 stainless steel tubing Suppliers', 'stainless steel 347 tube price', 
    '904l ss tubing suppliers', 'ss 904l tubes price', 'astm a333 pipe manufacturers', 'alloy steel a333 grade b pipe', 
    'alloy steel a333 pipe price', '2205 duplex stainless steel pipe manufacturers', '2205 duplex stainless steel tube price', 
    'super duplex stainless steel pipe manufacturers', '2507 super duplex pipe suppliers', 'super duplex steel 2507 tube price', 
    'inconel tube manufacturers', 'alloy 625 tubes suppliers', 'inconel tubing price list', 'hastelloy Pipe manufacturer', 
    'hastelloy tubing suppliers', 'hastelloy tube price in INDIA', 'monel tube manufacturer', 'monel 400 pipe suppliers', 
    'monel 400 pipe price list', 'hastelloy c276 pipe manufacturer', 'hastelloy c22 tube suppliers', 'Alloy c276 pipe price', 
    'hastelloy b2 pipe manufacturer', 'hastelloy c276 tubing suppliers', 'Alloy b2 tube price in india', 'Inconel 600 pipe Manufacturer', 
    'inconel 601 tube suppliers', 'alloy 600 tube price list',
  ],
  openGraph: {
    title: "Fusion Tech Alloys | Premier Industrial Tubing, Pipe, and Fittings,fasteners Supplier",
    description: "Fusion Tech Alloys is the most acclaimed manufacturer, exporter, distributor, and supplier of industrial Tubing, Pipe, Bar, Round Bar, Bright Finish Bar, dairy fittings, and pipe fittings, complete with required test certificates. We are a leading pipe supplier in Mumbai and a tube stockist in Pune. Our extensive product range includes stainless steel pipes and tubes, buttweld fittings, flanges, socketweld fittings, screwed fittings, fasteners, and valves. We proudly serve various locations including Rajkot, Gujarat, India, and the UAE.",
    images: [
      {
        url: 'https://www.fusiontechalloys.com/Images/Base/fusionOgImage.png',
        width: 1200,
        height: 630,
        alt: 'Fusion Tech Alloys',
      },
    ], // Replace with the actual path to your image
    url: 'https://fusiontechalloys.com/', // Replace with the actual URL of your website
    type: 'website'
  },
  twitter: {
    card: 'product',
    title: "Fusion Tech Alloys | Premier Industrial Tubing, Pipe, and Fittings,fasteners Supplier",
    description: "Fusion Tech Alloys is the most acclaimed manufacturer, exporter, distributor, and supplier of industrial Tubing, Pipe, Bar, Round Bar, Bright Finish Bar, dairy fittings, and pipe fittings, complete with required test certificates. We are a leading pipe supplier in Mumbai and a tube stockist in Pune. Our extensive product range includes stainless steel pipes and tubes, buttweld fittings, flanges, socketweld fittings, screwed fittings, fasteners, and valves. We proudly serve various locations including Rajkot, Gujarat, India, and the UAE.",
    images: [
      {
        url: 'https://www.fusiontechalloys.com/Images/Base/fusionOgImage.png',
        width: 1200,
        height: 630,
        alt: 'Fusion Tech Alloys',
      },
    ],  // Replace with the actual path to your image
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link rel="icon" href="/Fevicon/favicon.ico" sizes="any" />
     <link rel="apple-touch-icon" sizes="152x152" href="/FavIcon/apple-touch-icon.png"/>
     <link rel="icon" type="image/png" sizes="32x32" href="/FavIcon/favicon-32x32.png"/>
     <link rel="icon" type="image/png" sizes="16x16" href="/FavIcon/favicon-16x16.png"/>
     <link rel="manifest" href="/FavIcon/site.webmanifest"/>
     <link rel="mask-icon" href="/FavIcon/safari-pinned-tab.svg" color="#5bbad5"/>
     <meta name="msapplication-TileColor" content="#da532c"/>
   <meta name="theme-color" content="#ffffff"/>
     </head>
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
