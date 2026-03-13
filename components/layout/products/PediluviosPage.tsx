export default function PediluviosPage() {
    return(
        <div className="bg-white py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h1>Descripción</h1>
                    <span data-replit-metadata="client/src/pages/About.tsx:75:20" data-component-name="span"
                          className="w-8 h-1 bg-[#1e447b] rounded-full inline-block"
                    />
                    <p className="my-10 text-primary-700 text-justify">
                        Los pediluvios de desinfección de caucho están
                        diseñados para contribuir con las medidas de
                        seguridad e higiene en los centros de trabajo,
                        en cumplimiento de la Ley 29783 de Seguridad y
                        Salud en el Trabajo. Están fabricados en caucho
                        flexible y cuentan con base antideslizante,
                        bordes tipo rampa y un diseño interno que
                        permite contener líquidos desinfectantes de
                        forma segura.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-5">
                        <div className="flex flex-row">
                            <div className="bg-accent-red w-[10px] h-[10px] rounded-2xl items-center m-3"></div>
                            <h1 className="text-2xl md:text-3xl font-bold">El Problema</h1>
                        </div>
                        <p className="px-3 text-primary-700 text-base md:text-lg leading-relaxed text-justify">
                            El uso de pediluvios inadecuados puede
                            generar riesgos como deslizamientos,
                            tropiezos o salpicaduras de líquidos
                            desinfectantes que humedecen el área
                            circundante, aumentando la probabilidad
                            de accidentes.
                        </p>
                    </div>

                    <div className="space-y-5">
                        <div className="flex flex-row">
                            <div className="bg-accent-green w-[10px] h-[10px] rounded-2xl items-center m-3"></div>
                            <h1 className="text-2xl md:text-3xl font-bold">La Solución</h1>
                        </div>
                        <p className="px-3 text-primary-700 text-base md:text-lg leading-relaxed text-justify">
                            Los pediluvios de caucho ofrecen mayor
                            estabilidad y seguridad gracias a su
                            peso adecuado, base antideslizante y
                            bordes de acceso tipo rampa. Su material
                            flexible y diseño interno antideslizante
                            ayudan a reducir riesgos de caídas y
                            facilitan una desinfección segura del
                            calzado.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}