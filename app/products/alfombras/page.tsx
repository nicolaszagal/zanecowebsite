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
                        description: 'Alfombra con broches laterales que permite la unión de varias unidades.',
                        measure: '91.4cm x 91.4cm x 15mm',
                        color: 'Negro',
                        application: 'Áreas húmedas, cocinas, lavanderías, industria pesca, hospitales, criaderos, agro industria, etc.',
                        image1: '/img/product/alfombras/GM-902.jpg',
                        image2: '/img/product/alfombras/GM-902_2.jpg',
                    },
                    {
                        title: 'Modelo GM - 902 MOD',
                        description: 'Los modulos de 91cm x 91cm son unidos por medio de broches laterales, con la finalidad de expandir el tamaño de estos. Cada alfombra cuenta con gruñas cada 30 cm, permitiendo obtener modulos de menor dimensión',
                        measure: 'Múltiplos de 30cm x 30cm x 15mm',
                        color: 'Negro',
                        application: 'Áreas húmedas, cocinas, lavanderías, industria pesca, hospitales, criaderos, agro industria, etc.',
                        image1: '/img/product/alfombras/GM-902_3.jpg',
                        image2: '/img/product/alfombras/GM-902_4.jpg',
                    },
                    {
                        title: 'Modelo RL - 102',
                        description: 'Alfombra antifatiga y antideslizante con marcos biselados.',
                        measure: '158cm x 98cm x 15mm',
                        color: 'Negro',
                        application: 'Zonas de alto tránsito, áreas húmedas, cocinas, embarcaciones pesqueras, hospitales, criaderos, agro industria, etc.',
                        image1: '/img/product/alfombras/RL-102.jpg',
                        image2: '/img/product/alfombras/RL-102_2.jpg',
                    },
                    {
                        title: 'Modelo GM - 303',
                        description: 'Ideal para uso industrial, facilita el drenaje de líquidos.',
                        measure: '150cm x 90cm x 16mm o 20mm (Consultar disponibilidad)',
                        color: 'Negro',
                        application: 'Zonas de alto tránsito, áreas húmedas, cocinas, embarcaciones pesqueras, hospitales, criaderos, agro industria, etc.',
                        image1: '/img/product/alfombras/GM-303.jpg',
                        image2: '/img/product/alfombras/GM-303_2.jpg',
                    },
                    {
                        title: 'Modelo GM - 800',
                        description: 'Ideal para uso industrial, facilita el drenaje de líquidos.',
                        measure: '100cm x 100cm x 15mm',
                        color: 'Negro',
                        application: 'Alto tránsito áreas húmedas, cocinas, embarcaciones pesqueras, hospitales, criaderos, agro industria, etc.',
                        image1: '/img/product/alfombras/GM-800.jpg',
                        image2: '/img/product/alfombras/GM-800_2.jpg',
                    },
                    {
                        title: 'Modelo GM - 404 D',
                        description: 'Ideal para uso industrial, facilita el drenaje de líquidos.',
                        measure: '150cm x 100cm x 22mm',
                        color: 'Negro',
                        application: 'Alto tránsito. áreas húmedas, cocinas, lavanderías, industria pesca, hospitales, criaderos, agro industria, zonas de lavado de vehículos, etc.',
                        image1: '/img/product/alfombras/GM-404D.jpg',
                        image2: '/img/product/alfombras/GM-404D_2.jpg',
                    },
                    {
                        title: 'Modelo GM - 701',
                        description: 'Protección de superficies en porcelanato o mayólicas.',
                        measure: '10m x 1m x 10mm',
                        color: 'Negro',
                        application: 'Zonas de alto tránsito, áreas húmedas, cocinas, embarcaciones pesqueras, hospitales, criaderos, agro industria, etc.',
                        image1: '/img/product/alfombras/GM-701.jpg',
                        image2: '/img/product/alfombras/GM-701_2.jpg',
                    },
                    {
                        title: 'Modelo GM - 510',
                        description: 'Diseño de pines verticales para limpieza de calzado. Cuenta con border biselados',
                        measure: '98cm x 81cm x 16mm',
                        color: 'Negro',
                        application: 'Ingresos, atrapa mugre, limpia pies para industria en general. Se puede agregar liquido desinfectante dentro de los pines , sin exceder el límite del borde perimetral para ser usado como un pediluvio.',
                        image1: '/img/product/alfombras/GM-510.jpg',
                        image2: '/img/product/alfombras/GM-510_2.jpg',
                    },
                    {
                        title: 'Modelo GM - 902 C - Industrial',
                        description: 'Cuenta con broches laterales, posibilitando la unión de varias alfombras o la colocación de biseles perimetrales',
                        measure: '91.4cm x 91.4cm x 16mm',
                        color: 'Negro',
                        application: 'Recepciones, gimnasios, estaciones de trabajo, almacenes e industria en general. Ayuda a la reducción de indice de fatiaga del trabajador, es ideal en lineas de trabajo en donde se busca evitar rupturas de los productos pro caidas inesperadas',
                        image1: '/img/product/alfombras/GM-902CI.jpg',
                        image2: '/img/product/alfombras/GM-902CI_2.jpg',
                    },
                    {
                        title: 'Modelo GM - 902 C - Recreacional',
                        description: 'Cuenta con broches laterales, posibilitando la unión de varias alfombras o la colocación de biseles perimetrales',
                        measure: '91.4cm x 91.4cm x 16mm',
                        color: 'Negro',
                        application: 'Recepciones, gimnasios, estaciones de trabajo, almacenes e industria en general. Absorbe los impactos de los saltos evitando lesiones de deportistas, reduce ruidos y protege optimamente la superficie donde se coloca la alfombra de caucho',
                        image1: '/img/product/alfombras/GM-902CR.jpg',
                        image2: '/img/product/alfombras/GM-902CR_2.jpg',
                    },
                    {
                        title: 'Modelo BM-013',
                        description: 'Alfombra antifatiga con diseño de burbujas con bisel perimetral.',
                        measure: '90cm x 60cm x 13mm',
                        color: 'Negro',
                        application: 'Estaciones de trabajo, zonas de packing y picking almacenes, recepciones e industrias en general. El diseño de burbujas amortigua el peso, proporcionando una sensación agradable de confort.',
                        image1: '/img/product/alfombras/BM-013.jpg',
                        image2: '/img/product/alfombras/BM-013_2.jpg',
                    },
                    {
                        title: 'Modelo BM-013 P',
                        description: 'Alfombra antifatiga con diseño de burbujas con bisel perimetral. Es posible unir varias alfombras, haciendo un corte en un extremo y pegándolas.',
                        measure: '170cm x 60cm x 13mm | 250cm x 60cm x 13mm. ',
                        color: 'Negro',
                        application: 'Estaciones de trabajo, zonas de packing y picking almacenes, recepciones e industrias en general.El diseño de burbujas amortigua el peso , proporcionando una sensación agradable de confort.',
                        image1: '/img/product/alfombras/BM-013P.jpg',
                        image2: '/img/product/alfombras/BM-013P_2.jpg',
                    },
                    {
                        title: 'Modelo MAT-016',
                        description: 'Consta de una base de tela sintética de 1 mm de espesor, un soporte de Etil Vinil Acetato de 12mm y recubierto con una lámina de caucho antideslizante de 3mm con diseño diamantado o estoperol. Áreas secas. Fabricación a solicitud del cliente',
                        measure: '90cm x 60cm x 16mm | 120cm x 60xm x 16mm | 150cm x 60cm x 16mm (Medidas frecuentes)',
                        color: 'Negro',
                        application: 'Estaciones de trabajo con áreas secas. Zonas de embalaje, áreas de trabajo, lineas de producción, toda zona en donde se busque minimizar indices de fatiga del trabajador.',
                        image1: '/img/product/alfombras/MAT-016.jpg',
                        image2: '/img/product/alfombras/MAT-016_2.jpg',
                    },
                    {
                        title: 'Modelo HR - 960 / HR - 745',
                        description: 'Alfombra secante de calzado con base de caucho con superficie de polipropileno.',
                        measure: '90cm x 60cm x 11mm | 75cm x 45cm x 11mm',
                        color: 'Negro',
                        application: 'Alfombra para secado de calzado a la salida del paso por el pediluvio. Desinfección y sanitización de Ingresos en zonas controladas, limpia calzado.  Industria en general, comercios, accesos e ingresos.',
                        image1: '/img/product/alfombras/HR-960.jpg',
                        image2: '/img/product/alfombras/HR-960_2.jpg',
                    },
                    {
                        title: 'Modelo GM - 420',
                        description: 'Alfombras de caucho solo antideslizante.',
                        measure: '200cm x 100cm x 10mm',
                        color: 'Negro',
                        application: 'Zonas ganaderas, alto tránsito, áreas húmedas, rampas, embarcaciones pesqueras, etc.',
                        image1: '/img/product/alfombras/GM-420.jpg',
                        image2: '/img/product/alfombras/GM-420_2.jpg',
                        tagText: 'Bajo Proyecto de Importación'
                    },
                    {
                        title: 'Modelo GM - 421',
                        description: 'Alfombras de caucho solo antideslizante.',
                        measure: '183cm x 122cm x 17mm',
                        color: 'Negro',
                        application: 'Zonas de alto tránsito, áreas húmedas, embarcaciones pesqueras, criaderos, agro industria, etc.',
                        image1: '/img/product/alfombras/GM-421.jpg',
                        image2: '/img/product/alfombras/GM-421_2.jpg',
                        tagText: 'Bajo Proyecto de Importación'
                    },
                    {
                        title: 'Modelo GM - 422',
                        description: 'Alfombras de caucho solo antideslizante.',
                        measure: '122cm x 72cm x 20mm',
                        color: 'Negro',
                        application: 'Zonas ganaderas, alto tránsito, áreas húmedas, industria pesca, criaderos, agro industria, etc.',
                        image1: '/img/product/alfombras/GM-422.jpg',
                        image2: '/img/product/alfombras/GM-422_2.jpg',
                        tagText: 'Bajo Proyecto de Importación'
                    },
                ]}
            />
        </div>
    )
}