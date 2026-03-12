import Link from "next/link";

export default function Footer(){
    return (
        <footer>
            <div className="mx-auto bg-white flex flex-col border border-secondary-10 p-4">
                <div className="container mx-auto py-15">
                    <div className="flex flex-row justify-center items-center w-full">
                        <div className="mx-auto w-120 h-50">
                            <div className="flex flex-wrap border-b-4 border-primary-500 h-15">
                                <h1 className="text-xl leading-tight text-left">ALFOMBRAS ANTIFATIGA Y ANTIDESLIZANTE DE CAUCHO</h1>
                            </div>
                            <div className="flex img fluid items-center justify-center md:justify-start mt-10">
                                <img src="/img/logo.png" alt="Logo" className="w-32 lg:w-48 object-contain"/>
                            </div>
                        </div>
                        <div className="mx-auto w-100 h-50">
                            <div className="flex flex-wrap border-b-4 border-secondary-500 h-15">
                                <h1 className="text-xl leading-tight text-left text-secondary-500 font-medium pt-6">SECCIONES</h1>
                            </div>
                            <div className="mx-auto flex justify-between px-6">
                                <div className="flex flex-col gap-3 text-sm text-secondary-500 font-medium font-heading mt-5">
                                    <Link href="/" className="hover:text-secondary-800 transition">
                                        Inicio
                                    </Link>
                                    <Link href="/about" className="hover:text-secondary-800 transition">
                                        Nosotros
                                    </Link>

                                    <Link href="/contact" className="hover:text-secondary-800 transition">
                                        Productos
                                    </Link>

                                    <Link href="/contact" className="hover:text-secondary-800 transition">
                                        Contacto
                                    </Link>

                                    <Link href="/contact" className="hover:text-secondary-800 transition">
                                        Distribuidor
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto w-100 h-50">
                            <div className="flex flex-wrap border-b-4 border-secondary-500 h-15">
                                <h1 className="text-xl leading-tight text-left text-secondary-500 font-medium pt-6">VALORES</h1>
                            </div>
                            <div className="">
                                <div className="mx-auto flex justify-between px-6">
                                    <ul className="flex flex-col gap-3 text-sm text-secondary-500 font-medium font-heading mt-5">
                                        <li className="text-sm text-secondary-500">Integridad</li>
                                        <li className="text-sm text-secondary-500">Compromiso</li>
                                        <li className="text-sm text-secondary-500">Respeto</li>
                                        <li className="text-sm text-secondary-500">Responsabilidad Social</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-primary-500 text-neutral bottom-0">
                <div className="container flex flex-row justify-between text-center  mx-auto py-4">
                    <p className="text-neutral text-xs">Desarrollado por Zagal Negocios Corporativos Perú S.A.C.</p>
                    <p className="text-neutral text-xs">&copy; 2022 Zagal Negocios Corporativos Perú; S.A.C. All rights reserved.</p>
                </div>
            </footer>
        </footer>
    )
}