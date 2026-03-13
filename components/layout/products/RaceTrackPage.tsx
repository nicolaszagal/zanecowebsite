export default function RaceTrackPage() {
    return(
        <div className="bg-white py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h1>Descripción</h1>
                    <span data-replit-metadata="client/src/pages/About.tsx:75:20" data-component-name="span"
                          className="w-8 h-1 bg-[#1e447b] rounded-full inline-block"
                    />
                    <p className="my-10 text-primary-700 text-justify">
                        El sistema Race Track es un recubrimiento para
                        pistas atléticas recreativas y de alta competencia,
                        fabricado con caucho y poliuretano. Está compuesto
                        por una capa superior de fricción y una base inferior
                        amortiguadora, disponible en rollos prefabricados o
                        mediante aplicación in situ.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-5">
                        <div className="flex flex-row">
                            <div className="bg-accent-red w-[10px] h-[10px] rounded-2xl items-center m-3"></div>
                            <h1 className="text-2xl md:text-3xl font-bold">El Problema</h1>
                        </div>
                        <p className="px-3 text-primary-700 text-base md:text-lg leading-relaxed text-justify">
                            Las pistas deportivas requieren superficies
                            que absorban impactos, ofrezcan buena tracción
                            y mantengan estabilidad para reducir el riesgo
                            de lesiones y mejorar el rendimiento de los
                            atletas.
                        </p>
                    </div>

                    <div className="space-y-5">
                        <div className="flex flex-row">
                            <div className="bg-accent-green w-[10px] h-[10px] rounded-2xl items-center m-3"></div>
                            <h1 className="text-2xl md:text-3xl font-bold">La Solución</h1>
                        </div>
                        <p className="px-3 text-primary-700 text-base md:text-lg leading-relaxed text-justify">
                            El sistema Race Track proporciona una superficie
                            elástica y estable que mejora la seguridad y el
                            desempeño deportivo. Es fácil de instalar y su
                            estructura de caucho con capa de EPDM ofrece
                            buena amortiguación, durabilidad y agarre para
                            el uso atlético.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto bg-neutral my-20 p-10 md:p-12 rounded-2xl">
                    <h1 className="mb-10">Aplicaciones</h1>
                    <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
                        {[
                            "Áreas deportivas.",
                            "Pistas atléticas.",
                            "Gimnasios",
                            "Clubes deportivos.",
                        ].map((aplicacion) => (
                            <div key={aplicacion} className="flex items-start gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-primary-500 shrink-0">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                </svg>
                                <p className="text-primary-700">{aplicacion}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}