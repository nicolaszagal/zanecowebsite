import ProductHeroComponent from "@/components/layout/ProductHeroComponent";
import AlfombrasPage from "@/components/layout/products/AlfombrasPage";
import ProductCardComponent from "@/components/layout/products/ProductCardComponent";

export default function Alfombras(){
    return(
        <div>
            <ProductHeroComponent
                title="Alfombras Antifatiga Antideslizante"
                description="Ley 29783. - Ley de Seguridad y Salud en el Trabajo, Agosto 2011."
                imageUrl="/img/product/product1.jpg"
                breadcrumbItems={[
                    { label: 'Home', href: '/' },
                    { label: 'Productos', href: '/products' },
                    { label: 'Alfombras'}
                ]}
                breadcrumbVariant="secondary"
            />
            <AlfombrasPage/>
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