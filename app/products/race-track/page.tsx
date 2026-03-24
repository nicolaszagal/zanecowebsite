import ProductHeroComponent from "@/components/layout/ProductHeroComponent";
import ProductCardComponent from "@/components/layout/products/ProductCardComponent";
import RaceTrackPage from "@/components/layout/products/RaceTrackPage";

export default function RaceTrack(){
    return(
        <div>
            <ProductHeroComponent
                title="Rollos de Caucho para pistas atléticas - Race Track"
                description="Vaciado In Situ"
                breadcrumbItems={[
                    { label: 'Home', href: '/' },
                    { label: 'Productos', href: '/products' },
                    { label: 'Race Track'}
                ]}
                imageUrl="/img/product/product4.jpg"
                breadcrumbVariant="secondary"
            />
            <RaceTrackPage/>
            <ProductCardComponent
                items={[
                    {
                        title: 'Race Track',
                        description: 'Sistema de rollo de caucho pre vulcanizado para pista atlética.',
                        measure: 'Rollo de 15m x 1.22m x 13mm +/- 0.5mm. Capa superior de Caucho EPDM (Sintético) 3mm. Capa Inferior de Caucho Natural 10 mm. Rollos de 1.25m x 15m Dureza Shore A: 45 - 60A°. Adhesión: Adhesivo de Poliuretano',
                        color: 'Verde, Azul , Gris y Terracota',
                        application: 'Áreas deportivas, gimnasios, clubes deportivos.',
                        image1: '/img/product/racetrack/racetrack.jpg',
                        image2: '/img/product/racetrack/racetrack_2.jpg',
                    },
                ]}
            />
        </div>
    )
}