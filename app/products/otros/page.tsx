import HeroComponent from "@/components/layout/HeroComponent";
import ProductCardComponent from "@/components/layout/products/ProductCardComponent";
import OtrosPage from "@/components/layout/products/OtrosPage";

export default function Otros(){
    return(
        <div>
            <HeroComponent
                title="Otros productos"
                description="Vinil Antideslizante de PVC- Polipropileno PP - Polietileno de Alta densidad HDPE"
                breadcrumbItems={[
                    { label: 'Home', href: '/' },
                    { label: 'Productos', href: '/products' },
                    { label: 'Otros Productos'}
                ]}
            />
            <OtrosPage/>
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