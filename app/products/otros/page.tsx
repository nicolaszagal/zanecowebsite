import ProductHeroComponent from "@/components/layout/ProductHeroComponent";
import ProductCardComponent from "@/components/layout/products/ProductCardComponent";
import OtrosPage from "@/components/layout/products/OtrosPage";

export default function Otros(){
    return(
        <div>
            <ProductHeroComponent
                title="Otros productos"
                description="Vinil Antideslizante de PVC- Polipropileno PP - Polietileno de Alta densidad HDPE"
                breadcrumbItems={[
                    { label: 'Home', href: '/' },
                    { label: 'Productos', href: '/products' },
                    { label: 'Otros Productos'}
                ]}
                imageUrl="/img/product/product7.jpg"
                breadcrumbVariant="secondary"
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