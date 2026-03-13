"use client"
import AboutUs from "@/components/layout/about/AboutUs";
import AboutGalery from "@/components/layout/about/AboutGalery";
import MisionVision from "@/components/layout/about/MisionVision";
import HeroComponent from "@/components/layout/HeroComponent";

export default function About() {
    return(
        <section>
            <HeroComponent
                title="Nuestra Historia"
                description="Especialistas en soluciones de caucho para la seguridad y el confort de su empresa."
                breadcrumbItems={[
                    { label: "Inicio", href: "/" },
                    { label: "Nosotros" },
                ]}
                variant="default"
            />
            <AboutUs/>
            <AboutGalery/>
            <MisionVision/>
        </section>
    )
}