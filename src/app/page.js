import AboutSec from "@/components/HomeCom/AboutSec";
import ApplicationSec from "@/components/HomeCom/ApplicationSec";
import HeroSec from "@/components/HomeCom/HeroSec";
import ProductSec from "@/components/HomeCom/ProductSec";
import WhychooseUs from "@/components/HomeCom/WhychooseUs";


export default function Home() {
  return (
    <main className="">
    <HeroSec/>
    <AboutSec/>
    <ProductSec/>
    <WhychooseUs/>
    <ApplicationSec/>
    </main>
  );
}
