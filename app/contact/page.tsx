import HeroComponent from "@/components/layout/HeroComponent";
import ContactForm from "@/components/layout/contact/ContactForm";

export default function Contact() {
    return(
        <section>
            <HeroComponent
                title="Contáctanos"
                description="Solicita cotizaciones, administración y ventas, o si deseas ser nuestro distribuidor."
                breadcrumbItems={[
                    { label: "Inicio", href: "/" },
                    { label: "Contacto" },
                ]}
            />
            <div className="bg-white w-full py-24 px-6">
                <div className="max-w-7xl mx-auto bg-white">
                    <h1>Envíanos tus consultas</h1>
                    <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto mt-10">
                        <div className="flex-col max-w-sm">
                            <h1 className="text-lg my-10">Zagal Negocios Corporativos Perú S.A.C.</h1>
                            <div className="flex flex-row">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 items-center">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                                </svg>
                                <div className="flex flex-col mx-3">
                                    <p className="py-1 mb-3 font-semibold text-[16px]">Psje. Rogel Retes 1053 Urb Roma Cercado de Lima</p>
                                    <p className="py-1 mb-3 font-semibold text-[16px]">🇵🇪 Lima - Perú</p>
                                </div>
                            </div>
                            <div className="flex flex-row my-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 items-center">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>

                                <div className="flex flex-col mx-3">
                                    <p className="py-1 font-semibold text-[16px]">+51 994 999 955</p>
                                </div>
                            </div>
                            <div className="flex flex-row my-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                <div className="flex flex-col mx-3">
                                    <p className="py-1 font-semibold text-[16px]">Asesoría y ventas</p>
                                    <p className="py-1 text-[16px] text-primary-100">rzagal@zanecoperu.com</p>
                                    <p className="py-1 text-[16px] text-primary-100">zaneco@zanecoperu.com</p>
                                    <p className="py-1 font-semibold text-[16px]">Gerencia General</p>
                                    <p className="py-1 text-[16px] text-primary-100">nzagal@zanecoperu.com</p>
                                </div>
                            </div>
                            <div className="flex flex-row my-5">
                                <div className="hidden md:flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col mx-3">
                                    <p className="text-[16px] font-semibold">Lun - Vie 8:30 - 18:30</p>
                                    <p className="text-[16px] text-secondary-700">Sab y Dom Cerrado</p>
                                </div>
                            </div>
                        </div>
                        <div className="maxw-4xll w-full justify-center h-full items-center">
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}