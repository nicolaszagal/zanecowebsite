import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";

export default function OurServices(){
    return (
        <section>
            <div className="bg-white">
                <h1 className="text-center pt-20">Nuestras Soluciones</h1>
                <h2 className="text-center mx-auto max-w-xl py-5">Especialistas en revestimientos industriales y comerciales. Productos diseñados para brindar seguridad y confort.</h2>
                <div className="container flex flex-row flex-wrap p-10 mx-auto justify-center items-center">
                    <div className="text-4xl max-w-2xl">
                        <Tag text={"Servicio Principal"} variant={"secondary"}/>
                        <h1 className="">Suministro y Asesoría en Soluciones de Caucho</h1>
                        <p className="py-4">Somos especialistas en la comercialización y distribución de pisos de caucho de alta calidad. Contamos con una gama diversa de productos que se adaptan a las diferentes necesidades de nuestros clientes.</p>
                        <ul>
                            <li className="py-4">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <h1 className="text-lg mx-2">Evaluación de Espacios</h1>
                                </div>
                                <p className="text-sm mx-8">Análisis completo del área a intervenir para determinar la mejor solución</p>
                            </li>
                            <li className="py-4">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <h1 className="text-lg mx-2">Garantía de Calidad</h1>
                                </div>
                                <p className="text-sm mx-8">Productos verificados al 100%, fabricados con estándares internacionales</p>
                            </li>
                            <li className="py-4">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <h1 className="text-lg mx-2">Asesoría Integral</h1>
                                </div>
                                <p className="text-sm mx-8">Te acompañamos en todo el proceso, desde la selección hasta la implementación</p>
                            </li>
                        </ul>
                        <div className="text-sm mx-auto my-5">
                            <Button text="Solicitar Cotización" variant={"primary"}/>
                        </div>
                    </div>
                    <div>
                        <img src="/img/home/service.jpg" alt="Servicio Principal" className="max-w-2xl w-full h-auto rounded-lg"/>
                    </div>
                </div>
            </div>
            <div className="bg-neutral my-20">
                <h1 className="text-center">Servicios Complementarios</h1>
                <h2 className="text-center mx-auto max-w-xl my-5">Además de la venta y asesoría, ofrecemos servicios adicionales para garantizar la máxima durabilidad de nuestros productos.</h2>


            </div>
        </section>
    )
}
