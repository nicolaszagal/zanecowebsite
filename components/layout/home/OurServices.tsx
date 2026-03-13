import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";

export default function OurServices() {
    return (
        <section>
            <div className="bg-white py-24 px-6">

                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h1>Nuestras Soluciones</h1>
                    <h2 className="mx-auto max-w-xl mt-4">Especialistas en revestimientos industriales y comerciales. Productos diseñados para brindar seguridad y confort.</h2>
                </div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    {/* TEXTO */}
                    <div>
                        <Tag text="Servicio Principal" variant="secondary" />
                        <h1 className="mt-4">Suministro y Asesoría en Soluciones de Caucho</h1>
                        <p className="mt-4 text-lg text-justify">Somos especialistas en la comercialización y distribución de pisos de caucho de alta calidad. Contamos con una gama diversa de productos que se adaptan a las diferentes necesidades de nuestros clientes.</p>

                        <ul className="mt-8 space-y-6">
                            <li>
                                <div className="flex items-center gap-3">
                                    <svg className="size-6 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                                    </svg>
                                    <h3 className="text-lg font-semibold">Evaluación de Espacios</h3>
                                </div>
                                <p className="text-sm text-gray-600 ml-9 mt-1">Análisis completo del área a intervenir para determinar la mejor solución</p>
                            </li>

                            <li>
                                <div className="flex items-center gap-3">
                                    <svg className="size-6 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                                    </svg>
                                    <h3 className="text-lg font-semibold">Garantía de Calidad</h3>
                                </div>

                                <p className="text-sm text-gray-600 ml-9 mt-1">Productos verificados al 100%, fabricados con estándares internacionales</p>
                            </li>
                            <li>
                                <div className="flex items-center gap-3">
                                    <svg className="size-6 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                                    </svg>
                                    <h3 className="text-lg font-semibold">Asesoría Integral</h3>
                                </div>

                                <p className="text-sm text-gray-600 ml-9 mt-1">Te acompañamos en todo el proceso, desde la selección hasta la implementación</p>
                            </li>
                        </ul>

                        <div className="mt-8">
                            <Button text="Solicitar Cotización" variant="primary" />
                        </div>
                    </div>

                    {/* IMAGEN */}
                    <div>
                        <img src="/img/home/service.jpg" alt="Servicio Principal" className="w-full h-auto rounded-2xl shadow-md object-cover"/>
                    </div>
                </div>
            </div>

            {/* ===== SERVICIOS COMPLEMENTARIOS ===== */}
            <div className="bg-neutral py-24 px-6">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h1>Servicios Complementarios</h1>
                    <h2 className="mx-auto max-w-xl mt-4">Además de la venta y asesoría, ofrecemos servicios adicionales para garantizar la máxima durabilidad de nuestros productos.</h2>
                </div>

                <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

                    {/* CARD */}
                    <div className="flex flex-col bg-white border border-primary-50 rounded-xl p-8 shadow-sm hover:shadow-md transition">
                        <div className="mb-6">
                            <svg className="size-14 bg-primary-200/20 border border-primary-50 rounded-xl p-3 text-primary-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-14 bg-primary-200/20 border-1 border-primary-50 rounded-xl p-3 mb-5 text-primary-600">
                                    <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
                                </svg>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Mantenimiento</h3>
                        <p className="text-lg text-gray-600 leading-relaxed flex-grow">Programa integral de mantenimiento que extiende la vida útil de los pisos con limpieza profesional y tratamientos especializados.</p>
                        <a className="text-primary-500 pt-4">Conoce más →</a>
                    </div>

                    {/* CARD */}
                    <div className="flex flex-col bg-white border border-primary-50 rounded-xl p-8 shadow-sm hover:shadow-md transition">
                        <div className="mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-14 bg-accent-green/20 border-1 border-accent-green rounded-xl p-3 text-accent-green">
                                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                                <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                                <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Distribución y Logística</h3>
                        <p className="text-lg text-gray-600 leading-relaxed flex-grow">Entregas en Lima Metropolitana y según requerimientos del cliente dentro de los plazos establecidos.</p>
                        <a className="text-accent-green pt-4">Conoce más →</a>
                    </div>

                    {/* CARD */}
                    <div className="flex flex-col bg-white border border-primary-50 rounded-xl p-8 shadow-sm hover:shadow-md transition">
                        <div className="mb-6">
                            <svg className="size-14 bg-accent-purple/20 border-1 border-accent-purple rounded-xl p-3 text-accent-purple">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-14 bg-accent-purple/20 border-1 border-accent-purple rounded-xl p-3 mb-5 text-accent-purple">
                                    <path fillRule="evenodd" d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.54 15h6.42l.5 1.5H8.29l.5-1.5Zm8.085-8.995a.75.75 0 1 0-.75-1.299 12.81 12.81 0 0 0-3.558 3.05L11.03 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 0 0 1.146-.102 11.312 11.312 0 0 1 3.612-3.321Z" clipRule="evenodd" />
                                </svg>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Asesoría Técnica</h3>
                        <p className="text-lg text-gray-600 leading-relaxed flex-grow">Especialistas disponibles para asesorarte sobre la mejor opción de pisos según el tipo de negocio y flujo de personas.</p>
                        <a className="text-accent-purple pt-4">Conoce más →</a>
                    </div>

                    {/* CARD */}
                    <div className="flex flex-col bg-white border border-primary-50 rounded-xl p-8 shadow-sm hover:shadow-md transition">
                        <div className="mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-14 bg-accent-orange/20 border-1 border-accent-orange rounded-xl p-3 text-accent-orange">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Importaciones Varias</h3>
                        <p className="text-lg text-gray-600 leading-relaxed flex-grow">Importaciones adaptadas a las necesidades del cliente bajo solicitud.</p>
                        <a className="text-accent-orange pt-4">Conoce más →</a>
                    </div>

                </div>

            </div>

            {/* ===== CTA FINAL ===== */}
            <div className="bg-white py-24 px-6">

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <img src="/img/home/service.jpg" alt="Servicio" className="w-full rounded-2xl shadow-md object-cover"/>
                    <div className="bg-neutral border border-primary-900 rounded-3xl px-10 py-16">

                        <h1 className="mb-6">¿Por qué elegir nuestros servicios?</h1>

                        <p className="text-lg leading-relaxed mb-10 text-justify">
                            Con más de 20 años de experiencia en la industria del caucho,
                            garantizamos productos de calidad con un servicio personalizado
                            adaptado a las necesidades de tu negocio.
                        </p>

                        <ul className="grid sm:grid-cols-2 gap-6 mb-10">
                            <li className="flex items-center gap-4">
                                <span className="flex items-center justify-center size-10 font-bold">✓</span>
                                Productos verificados al 100%
                            </li>

                            <li className="flex items-center gap-4">
                                <span className="flex items-center justify-center size-10 font-bold">✓</span>
                                Equipo profesional
                            </li>

                            <li className="flex items-center gap-4">
                                <span className="flex items-center justify-center size-10 font-bold">✓</span>
                                Entrega rápida en Lima
                            </li>

                            <li className="flex items-center gap-4">
                                <span className="flex items-center justify-center size-10 font-bold">✓</span>
                                Asesoría personalizada
                            </li>
                        </ul>

                        <Button text="Contactar Ahora" variant="primary" />
                    </div>
                </div>
            </div>
        </section>
    );
}