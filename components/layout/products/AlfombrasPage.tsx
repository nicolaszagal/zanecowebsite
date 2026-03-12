export default function AlfombrasPage() {
    return(
        <div className="bg-white py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <h1>Descripción</h1>
                <span data-replit-metadata="client/src/pages/About.tsx:75:20" data-component-name="span"
                      className="w-8 h-1 bg-[#1e447b] rounded-full inline-block"
                />
                <p className="my-10 text-primary-700">
                    Las Alfombras Antifatiga Antideslizante están fabricadas
                    de caucho sintético y natural. Están diseñadas con la
                    finalidad de reducir la fatiga y las molestias ocasionadas
                    por las largas jornadas de trabajo de pie. Ofrecen
                    seguridad en el área de trabajo evitando caídas y
                    resbalones, ayuda a mantener áreas con la higiene
                    adecuada y por su diseño facilita el drenaje de fluidos.
                </p>

                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-5">
                        <h2 className="text-2xl md:text-3xl font-bold">El Problema</h2>
                        <p className="text-primary-700 text-base md:text-lg leading-relaxed">
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
                        <h2 className="text-2xl md:text-3xl font-bold">La Solución</h2>
                        <p className="text-primary-700 text-base md:text-lg leading-relaxed">
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
            </div>
        </div>
    )
}