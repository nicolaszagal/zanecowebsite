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
                        title: 'Modelo Z - Grip',
                        description: 'Vinil antideslizante para piscinas. Superficie de PVC sin base, trama abierta en forma de ondas',
                        measure: '15m x 1.20m x 5mm u 8mm',
                        color: 'Azul y Plomo',
                        application: 'Camerines, bordes de piscina y duchas',
                        image1: '/img/product/otros/ZGrip.jpg',
                        image2: '/img/product/otros/ZGrip_2.jpg',
                    },
                    {
                        title: 'Modelo LVA - 010',
                        description: 'Vinil antideslizante para piscinas. Superficie antideslizante de PVC - HD. 100% flexibles. Cuenta con sistema de unión por pines',
                        measure: '40cm x 40cm x 10mm',
                        color: 'Verde, rojo, azul, amarillo, negro y plomo',
                        application: 'Camerines, bordes de piscinas y duchas.',
                        image1: '/img/product/otros/LVA-010.jpg',
                        image2: '/img/product/otros/LVA-010_2.jpg',
                    },
                    {
                        title: 'Modelo NQR - 130',
                        description: 'Felpudo antideslizante de filamentos de vinilo, diseñado para retirar y atrapar suciedad, y la humedad en la puerta de la entrada.',
                        measure: '12m x 1.20m x 13mm',
                        color: 'Negro y plomo',
                        application: 'Ingresos de hospitales, universidades, supermercados, etc.',
                        image1: '/img/product/otros/NQR-130.jpg',
                        image2: '/img/product/otros/NQR-130_2.jpg',
                    },
                    {
                        title: 'Modelo NQR - 130 LG',
                        description: 'Felpudo de vinilo con logo',
                        measure: 'Producción bajo pedido',
                        color: 'Negro y plomo (Logos a color)',
                        application: 'Ingresos, Imagen Corporativa.',
                        image1: '/img/product/otros/NQR-130LG.jpg',
                        image2: '/img/product/otros/NQR-130LG_2.jpg',
                    },
                    {
                        title: 'Modelo GPP - 01',
                        description: 'Piso deportivo multifuncional de polipropileno 100% reciclable',
                        measure: '25cm x 25cm x 12.7mm (243g por pieza)',
                        color: 'Según carta',
                        application: 'Áreas deportivas multifuncionales.',
                        image1: '/img/product/otros/GPP-01.jpg',
                        image2: '/img/product/otros/GPP-01_2.jpg',
                    },
                    {
                        title: 'Modelo GPP - 18 L/T/E',
                        description: 'Piso multifuncional de PVC HD 100% reciclable',
                        measure: 'Loseta: 40cm x 40cm x 18mm  | Terminal: 40cm x 6cm x 18mm | Esquinero: 6cm x 6xm x 18mm',
                        color: 'Según carta',
                        application: 'Industrias y zonas de tránsito. Garajes, lavado de autos, zonas húmedas, sotanos, vestuarios, patios, etc.',
                        image1: '/img/product/otros/GPP-18.jpg',
                        image2: '/img/product/otros/GPP-18_2.jpg',
                    },
                    {
                        title: 'Piso Temporal HD - PP050',
                        description: 'Piso de polipropileno HD de alta resistencia 100% reciclable de 50mm de espesor ',
                        measure: '45.72cm x 45.72cm x 5.08cm. Peso: 12.8kg x m². Carga: 300 Tn x m',
                        color: 'Negro',
                        application: 'Carreteras, helipuertos, plataformas de perforación, zonas de tránsito, construcciones, campamentos mineros y áreas de mantenimiento. pisos temporales para minería.',
                        image1: '/img/product/otros/HD-PP050.jpg',
                        image2: '/img/product/otros/HD-PP050_2.jpg',
                    },
                    {
                        title: 'Piso Temporal AB - 012',
                        description: 'Piso antideslizante de HDPE polietileno de alta densidad. Alta resistencia al tránsito con capacidad de carga de 20Tn x m². Resistente a grasas y aceites',
                        measure: '2.40m x 1.20m x 12.7mm. Carga máxima 20 Tn. Área a recubrir 2.88m²',
                        color: 'Según carta',
                        application: 'Zonas de tránsito - Pisos temporales, construcciones, campamentos mineros, arena, lodo y áreas de mantenimiento.',
                        image1: '/img/product/otros/AB-012.jpg',
                        image2: '/img/product/otros/AB-012_2.jpg',
                    },
                    {
                        title: 'Piso Temporal AB - 020 / AB - 038',
                        description: 'Piso antideslizante de HDPE polietileno de alta densidad. Alta resistencia al tránsito con capacidad de carga de 20, 60 y 120 toneladas x m². Resistente a grasas y aceites',
                        measure: '2.40m x 1.20m x 20mm (AB - 020), carga de 60Tn, 2.88m² | 3m x 2.50m x 38mm (AB - 038), carga de 120Tn, 7.50m²',
                        color: 'Negro',
                        application: 'Industrias y zonas de tránsito. Garajes, lavado de autos, zonas&nbsp; húmedas, sotanos, vestuarios,patios, etc.',
                        image1: '/img/product/otros/AB-020.jpg',
                        image2: '/img/product/otros/AB-038.jpg',
                    },
                    {
                        title: 'HM - 1100',
                        description: 'Tachos contenedores de deshechos de 1100 litros de capacidad. Polietilineo de alta densidad',
                        measure: '1360mm x 1360mm x 1370mm. 51.5 kg por contenedor',
                        color: 'Según carta',
                        application: 'Contenedor de desechos',
                        image1: '/img/product/otros/HM-1100.jpg',
                        image2: '/img/product/otros/HM-1100_2.jpg',
                    },
                    {
                        title: 'TPF - 010',
                        description: 'Rollo de polipropileno protector de campo deportivo',
                        measure: '30.5cm x 10cm x 15mm',
                        color: 'Según carta',
                        application: 'Protector de grass y campos temporales. Ferias y estadios',
                        image1: '/img/product/otros/TPF-010.jpg',
                        image2: '/img/product/otros/TPF-010_2.jpg',
                    },
                    {
                        title: 'Precintos de seguridad',
                        description: 'Personalizados con logo y numeración correlativa',
                        measure: '-',
                        color: 'Según carta',
                        application: '-',
                        image1: '/img/product/otros/precintos.jpg',
                        image2: '/img/product/otros/precintos_2.jpg',
                    },
                ]}
            />
        </div>
    )
}