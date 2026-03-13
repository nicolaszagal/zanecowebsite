export default function LosetasPage() {
    return(
        <div className="bg-white py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h1>Descripción</h1>
                    <span data-replit-metadata="client/src/pages/About.tsx:75:20" data-component-name="span"
                          className="w-8 h-1 bg-[#1e447b] rounded-full inline-block"
                    />
                    <p className="my-10 text-primary-700 text-justify">
                        Las Losetas de Caucho Antigolpe Antideslizante
                        están fabricadas a partir de caucho reciclado
                        proveniente de neumáticos y otros productos de
                        caucho. Mediante un proceso de trituración se
                        obtienen gránulos que se aglomeran con resinas
                        de poliuretano y se moldean con presión y calor,
                        formando losetas resistentes y homogéneas. En su
                        capa superior incorporan caucho EPDM de color q
                        ue mejora la durabilidad y el acabado. Este
                        tipo de producto reutiliza materiales al final
                        de su vida útil, contribuyendo al cuidado del
                        medio ambiente.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-5">
                        <div className="flex flex-row">
                            <div className="bg-accent-red w-[10px] h-[10px] rounded-2xl items-center m-3"></div>
                            <h1 className="text-2xl md:text-3xl font-bold">El Problema</h1>
                        </div>
                        <p className="px-3 text-primary-700 text-base md:text-lg leading-relaxed text-justify">
                            Las superficies duras y resbalosas en
                            áreas de tránsito o recreación aumentan el
                            riesgo de caídas, golpes y lesiones. Además,
                            muchos pisos tradicionales no absorben impactos
                            ni reducen el ruido, y pueden acumular agua o
                            resultar difíciles de mantener higiénicos.
                        </p>
                    </div>

                    <div className="space-y-5">
                        <div className="flex flex-row">
                            <div className="bg-accent-green w-[10px] h-[10px] rounded-2xl items-center m-3"></div>
                            <h1 className="text-2xl md:text-3xl font-bold">La Solución</h1>
                        </div>
                        <p className="px-3 text-primary-700 text-base md:text-lg leading-relaxed text-justify">
                            Las losetas de caucho antigolpe ofrecen una
                            superficie antideslizante incluso en condiciones
                            húmedas, reduciendo el riesgo de accidentes. Su
                            capacidad de absorción de impactos ayuda a disminuir
                            lesiones por caídas y también reduce el ruido. Son
                            permeables al agua, fáciles de limpiar, no tóxicas y su
                            instalación es práctica, ya que pueden colocarse sin
                            adhesivos y reubicarse fácilmente cuando sea necesario.
                            Además, al estar fabricadas con caucho reciclado,
                            aportan una solución sostenible.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto bg-neutral my-20 p-10 md:p-12 rounded-2xl">
                    <h1 className="mb-10">Aplicaciones</h1>
                    <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
                        {[
                            "Gimnasios.",
                            "Clubes deportivos.",
                            "Borde de piscinas.",
                            "Complejos habitacionales, condominios.",
                            "Nidos y Colegios.",
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