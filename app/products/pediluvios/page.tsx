import HeroComponent from "@/components/layout/HeroComponent";
import ProductCardComponent from "@/components/layout/products/ProductCardComponent";
import PediluviosPage from "@/components/layout/products/PediluviosPage";

export default function Pediluvio(){
    return(
        <div>
            <HeroComponent
                title="Pediluvios - Bandeja para Desinfección de Calzado"
                description="Ley 29783. - Ley de Seguridad y Salud en el Trabajo, Agosto 2011."
                breadcrumbItems={[
                    { label: 'Home', href: '/' },
                    { label: 'Productos', href: '/products' },
                    { label: 'Pediluvios'}
                ]}
            />
            <PediluviosPage/>
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