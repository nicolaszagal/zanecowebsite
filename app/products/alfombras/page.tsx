import HeroComponent from "@/components/layout/HeroComponent";
import AlfombrasPage from "@/components/layout/products/AlfombrasPage";

export default function Alfombras(){
    return(
        <div>
            <HeroComponent
                title="Alfombras Antifatiga Antideslizante"
                description="Ley 29783. - Ley de Seguridad y Salud en el Trabajo, Agosto 2011."
                breadcrumbItems={[
                    { label: 'Home', href: '/' },
                    { label: 'Productos', href: '/products' },
                    { label: 'Alfombras'}
                ]}
            />
            <AlfombrasPage/>
        </div>
    )
}