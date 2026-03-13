import HeroComponent from "@/components/layout/HeroComponent";
import ProductCardComponent from "@/components/layout/products/ProductCardComponent";
import GrassSinteticoPage from "@/components/layout/products/GrassSinteticoPage";

export default function GrassSintetico(){
    return(
        <div>
            <HeroComponent
                title="Grass Sintético para áreas de juego y paisajismo"
                description="Grass Sintético de doble composición no requiere el uso de relleno."
                breadcrumbItems={[
                    { label: 'Home', href: '/' },
                    { label: 'Productos', href: '/products' },
                    { label: 'Grass Sintético'}
                ]}
            />
            <GrassSinteticoPage/>
            <ProductCardComponent
                items={[
                    {
                        title: 'Modelo GM - 902',
                        description: 'Alfombra con broches laterales que permite la unión de varias',
                        measure: '91.4cm x 91.4cm x 15mm',
                        color: 'Negro',
                        application: 'Áreas húmedas, cocinas, lavanderías, industria pesca, hospitales, criaderos, agro industria, etc.',
                        image1: '/images/products/alfombras/alfombra-antifatiga.jpg',
                        image2: '/images/products/alfombras/alfombra-antifatiga.jpg',
                    },
                ]}
            />
        </div>
    )
}