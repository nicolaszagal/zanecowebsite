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
                        title: 'Modelo GM - 701',
                        description: 'Rollo Antifatiga Antideslizante.',
                        measure: '10m x 1m x 10mm',
                        color: 'Negro',
                        application: 'Áreas húmedas, cocinas, pesca, hospitales,criaderos, agro industria Rollo antifatiga antideslizante Alto tránsito.',
                        image1: '/img/product/rollos/GM-701.jpg',
                        image2: '/img/product/rollos/GM-701_2.jpg',
                    },
                    {
                        title: 'Modelo RL - 601',
                        description: 'Rollo de caucho - Acanalado.',
                        measure: '10m x 1.20 m x 5mm',
                        color: 'Negro',
                        application: 'Zonas de alto tránsito, áreas humedas, tolvas, rampas, etc.',
                        image1: '/img/product/rollos/RL-601.jpg',
                        image2: '/img/product/rollos/RL-601_2.jpg',
                    },
                    {
                        title: 'Modelo RL - 602',
                        description: 'Rollo de caucho - Tramado.',
                        measure: '10m x 1.20 m x 5mm',
                        color: 'Negro',
                        application: 'Zonas de alto tránsito, áreas humedas, tolvas, rampas, etc.',
                        image1: '/img/product/rollos/RL-602.jpg',
                        image2: '/img/product/rollos/RL-602_2.jpg',
                    },
                    {
                        title: 'Modelo RL - 603',
                        description: 'Rollo de caucho - Diamantado',
                        measure: '20cm x 1.20m x 3mm',
                        color: 'Negro',
                        application: 'Áreas húmedas, cocinas, pesca, hospitales,criaderos, agro industria Rollo antifatiga antideslizante Alto tránsito.',
                        image1: '/img/product/rollos/RL-603.jpg',
                        image2: '/img/product/rollos/RL-603_2.jpg',
                    },
                    {
                        title: 'Modelo RL - 605',
                        description: 'Rollo de caucho - Estoperol',
                        measure: '10cm x 1m x 3mm',
                        color: 'Negro',
                        application: 'Áreas húmedas, cocinas, pesca, hospitales,criaderos, agro industria.  Rollo antideslizante.',
                        image1: '/img/product/rollos/RL-605.jpg',
                        image2: '/img/product/rollos/RL-605_2.jpg',
                    },
                ]}
            />
        </div>
    )
}