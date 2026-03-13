export default function GrassSinteticoPage() {
    return(
        <div className="bg-white py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h1>Descripción</h1>
                    <span data-replit-metadata="client/src/pages/About.tsx:75:20" data-component-name="span"
                          className="w-8 h-1 bg-[#1e447b] rounded-full inline-block"
                    />
                    <p className="my-10 text-primary-700 text-justify">
                        Las Alfombras Antifatiga Antideslizante están fabricadas
                        de caucho sintético y natural. Están diseñadas con la
                        finalidad de reducir la fatiga y las molestias ocasionadas
                        por las largas jornadas de trabajo de pie. Ofrecen
                        seguridad en el área de trabajo evitando caídas y
                        resbalones, ayuda a mantener áreas con la higiene
                        adecuada y por su diseño facilita el drenaje de fluidos.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-5">
                        <div className="flex flex-row">
                            <div className="bg-accent-red w-[10px] h-[10px] rounded-2xl items-center m-3"></div>
                            <h1 className="text-2xl md:text-3xl font-bold">El Problema</h1>
                        </div>
                        <p className="px-3 text-primary-700 text-base md:text-lg leading-relaxed text-justify">
                            La mala circulación de la sangre, como
                            resultado de estar de pie sobre superficies
                            duras, puede ocasionar hinchazón y dolor de
                            pies y piernas. Estar de pie de manera
                            estacionaria por largos periodos de tiempo es
                            una fuente de incomodidad en las piernas y
                            espalda. La exposición del trabajador en áreas
                            de trabajo húmedas, eleva el riesgo de sufrir
                            accidentes de diversa índole.
                        </p>
                    </div>

                    <div className="space-y-5">
                        <div className="flex flex-row">
                            <div className="bg-accent-green w-[10px] h-[10px] rounded-2xl items-center m-3"></div>
                            <h1 className="text-2xl md:text-3xl font-bold">La Solución</h1>
                        </div>
                        <p className="px-3text-primary-700 text-base md:text-lg leading-relaxed text-justify">
                            Las personas que trabajan de pie sobre alfombras
                            antifatiga son significativamente menos propensas
                            a experimentar fatiga que las que están sobre
                            un piso de concreto sin un medio que mejore la
                            situación. Estudios han demostrado que las personas
                            que permanecen de pie sobre pisos antifatiga experimentan
                            una menor fatiga muscular localizada. Debido a que parte
                            del peso es absorbido por las alfombras de caucho y
                            no se recargan en las articulaciones.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto bg-neutral my-20 p-10 md:p-12 rounded-2xl">
                    <h1 className="mb-10">Aplicaciones</h1>
                    <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
                        {[
                            "Áreas donde se operan máquinas.",
                            "Lavanderías.",
                            "Clubes deportivos.",
                            "Agro exportación.",
                            "Industria textil",
                            "Embarcaciones pesqueras.",
                            "Zonas de alto tránsito.",
                            "En restaurantes y bares.",
                            "Hoteles",
                            "Líneas de producción.",
                            "Manufactureras.",
                            "Crianza de animales.",
                            "Áreas expuestas a tratamiento de líquidos"
                        ].map((aplicacion) => (
                            <div key={aplicacion} className="flex items-start gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-primary-500 shrink-0">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                </svg>
                                <p>{aplicacion}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}