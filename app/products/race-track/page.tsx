import HeroComponent from "@/components/layout/HeroComponent";
import ProductCardComponent from "@/components/layout/products/ProductCardComponent";
import RaceTrackPage from "@/components/layout/products/RaceTrackPage";

export default function RaceTrack(){
    return(
        <div>
            <HeroComponent
                title="Rollos de Caucho para pistas atléticas - Race Track"
                description="Vaciado In Situ"
                breadcrumbItems={[
                    { label: 'Home', href: '/' },
                    { label: 'Productos', href: '/products' },
                    { label: 'Race Track'}
                ]}
            />
            <RaceTrackPage/>
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