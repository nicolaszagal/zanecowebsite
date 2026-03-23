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
                        title: 'Modelo GM - 201',
                        description: '',
                        measure: '50cm x 50cm x 20mm, 25mm o 30mm',
                        color: 'Verde, Azul , Gris y Terracota.',
                        application: 'Colegios, gimnasios, áreas de juego y Parques.',
                        image1: '/img/product/losetas/GM-201.jpg',
                        image2: '/img/product/losetas/GM-201_2.jpg',
                    },
                    {
                        title: 'Modelo GT - 104 A',
                        description: '',
                        measure: '110cm x 110cm x 15mm, 20mm o 25mm',
                        color: 'Verde, Azul , Gris y Terracota.',
                        application: 'Senderos, caballerizas y zonas de alto tránsito.',
                        image1: '/img/product/losetas/GT-104A.jpg',
                        image2: '/img/product/losetas/GT-104A_2.jpg',
                    },
                    {
                        title: 'Modelo GT - 204',
                        description: '',
                        measure: '100cm x 100cm x 15mm 0 20mm',
                        color: 'Tapa Verde, Azul, Gris y Terracota, Tapa Negro con jazpeado',
                        application: 'Gimnasios y áreas recreacionales.',
                        image1: '/img/product/losetas/GT-204.jpg',
                        image2: '/img/product/losetas/GT-204_2.jpg',
                    },
                    {
                        title: 'Modelo GT - 204 CP',
                        description: '',
                        measure: '100cm x 100cm x 15mm 0 20mm',
                        color: 'Negro con jazpeado.',
                        application: 'Gimnasios y áreas recreacionales.',
                        image1: '/img/product/losetas/GT-204CP.jpg',
                        image2: '/img/product/losetas/GT-204CP_2.jpg',
                    },
                ]}
            />
        </div>
    )
}