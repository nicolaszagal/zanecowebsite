import ProductHeroComponent from "@/components/layout/ProductHeroComponent";
import ProductCardComponent from "@/components/layout/products/ProductCardComponent";
import RollosPage from "@/components/layout/products/RollosPage";

export default function Rollos(){
    return(
        <div>
            <ProductHeroComponent
                title="Rollos de Caucho Antideslizante"
                description="Rollos antideslizante de caucho para uso industrial o deportivo"
                breadcrumbItems={[
                    { label: 'Home', href: '/' },
                    { label: 'Productos', href: '/products' },
                    { label: 'Rollos'}
                ]}
                imageUrl="/img/product/product3.jpg"
                breadcrumbVariant="secondary"
            />
            <RollosPage/>
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