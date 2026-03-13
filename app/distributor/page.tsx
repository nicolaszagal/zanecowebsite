import HeroComponent from "@/components/layout/HeroComponent";

export default function Distributor() {
    return(
        <section>
            <HeroComponent
                title="Conviertete en Nuestro Distribuidor"
                description=""
                breadcrumbItems={[
                    { label: "Inicio", href: "/" },
                    { label: "Distribuidor" },
                ]}
            />
        </section>
    )
}