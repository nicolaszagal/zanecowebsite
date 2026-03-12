import "./globals.css"
import Hero from "@/components/layout/home/Hero";
import OurServices from "@/components/layout/home/OurServices";
import Customers from "@/components/layout/home/Customers";

export default function Home() {
return (
    <section>
        <Hero/>
        <OurServices/>
        <Customers/>
    </section>
  );
}
