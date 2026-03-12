"use client"

export default function MisionVision() {
    return (
        <section className="bg-white py-16 md:py-24 px-6">

            <div className="max-w-7xl mx-auto">

                <div className="bg-neutral rounded-2xl p-8 md:p-12">

                    {/* MISION - VISION */}
                    <div className="grid md:grid-cols-2 gap-10">

                        {/* MISION */}
                        <div className="space-y-5">

                            <div className="w-14 h-14 bg-primary-200/20 rounded-xl flex items-center justify-center text-primary-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                </svg>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold">
                                Misión
                            </h2>

                            <p className="text-primary-500 text-base md:text-lg leading-relaxed">
                                Nuestra misión es proporcionar soluciones innovadoras y de alta calidad que satisfagan las necesidades de nuestros clientes, mientras fomentamos un ambiente de trabajo colaborativo y sostenible.
                            </p>

                        </div>


                        {/* VISION */}
                        <div className="space-y-5">

                            <div className="w-14 h-14 bg-primary-200/20 rounded-xl flex items-center justify-center text-primary-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                </svg>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold">
                                Visión
                            </h2>

                            <p className="text-primary-500 text-base md:text-lg leading-relaxed">
                                Nuestra visión es ser líderes en nuestra industria, reconocidos por nuestra excelencia en el servicio al cliente, innovación constante y compromiso con la sostenibilidad.
                            </p>

                        </div>

                    </div>


                    {/* VALORES */}
                    <div className="mt-14 pt-10 border-t border-secondary-100">

                        <div className="flex items-center gap-4 mb-10">

                            <div className="w-14 h-14 bg-primary-200/20 rounded-xl flex items-center justify-center text-primary-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/>
                                </svg>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold">
                                Nuestros Valores
                            </h2>

                        </div>


                        {/* GRID VALORES */}
                        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                            {[
                                "Integridad",
                                "Compromiso",
                                "Respeto",
                                "Confianza",
                                "Responsabilidad Social"
                            ].map((valor) => (
                                <div
                                    key={valor}
                                    className="bg-white
                                    p-5
                                    gap-3
                                    rounded-lg
                                    shadow-md
                                    flex items-center
                                    hover:shadow-xl
                                    transition"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-accent-green">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                    </svg>

                                    <p className="font-medium text-base">{valor}</p>
                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}