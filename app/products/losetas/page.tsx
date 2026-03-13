import ProductHeroComponent from "@/components/layout/ProductHeroComponent";
import ProductCardComponent from "@/components/layout/products/ProductCardComponent";
import LosetasPage from "@/components/layout/products/LosetasPage";

export default function Losetas(){
    return(
        <div>
            <ProductHeroComponent
                title="Losetas de Caucho Antigolpes"
                description="Piso antideslizante - Posee una óptima resistencia al resbalamiento estando mojado."
                breadcrumbItems={[
                    { label: 'Home', href: '/' },
                    { label: 'Productos', href: '/products' },
                    { label: 'Losetas'}
                ]}
                imageUrl="/img/product/product2.jpg"
                breadcrumbVariant="secondary"
            />
            <LosetasPage/>
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