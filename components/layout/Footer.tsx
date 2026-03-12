import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-neutral border-t border-secondary-100">

            {/* MAIN FOOTER */}
            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid gap-12 md:grid-cols-3">

                    {/* BRAND */}
                    <div className="space-y-6">

                        <div className="border-b-4 border-primary-500 pb-3">
                            <h2 className="text-lg md:text-xl font-semibold leading-tight">
                                ALFOMBRAS ANTIFATIGA Y ANTIDESLIZANTE DE CAUCHO
                            </h2>
                        </div>
                        <img src="/img/logo.png" alt="Logo" className="w-32 md:w-40 lg:w-48 object-contain"/>
                    </div>

                    {/* SECCIONES */}
                    <div>

                        <div className="border-b-4 border-secondary-500 pb-3 mt-6 mb-6">
                            <h2 className="text-lg font-medium text-secondary-500">
                                SECCIONES
                            </h2>
                        </div>

                        <nav className="flex flex-col gap-3 text-sm text-secondary-500 font-medium">
                            <Link href="/" className="hover:text-secondary-800 transition">
                                Inicio
                            </Link>
                            <Link href="/about" className="hover:text-secondary-800 transition">
                                Nosotros
                            </Link>
                            <Link href="/productos" className="hover:text-secondary-800 transition">
                                Productos
                            </Link>
                            <Link href="/contact" className="hover:text-secondary-800 transition">
                                Contacto
                            </Link>
                            <Link href="/distribuidor" className="hover:text-secondary-800 transition">
                                Distribuidor
                            </Link>
                        </nav>
                    </div>

                    {/* VALORES */}
                    <div>
                        <div className="border-b-4 border-secondary-500 mt-6 pb-3 mb-6">
                            <h2 className="text-lg font-medium text-secondary-500">VALORES</h2>
                        </div>

                        <ul className="flex flex-col gap-3 text-sm ">
                            <li className="text-secondary-500"> Integridad</li>
                            <li className="text-secondary-500">Compromiso</li>
                            <li className="text-secondary-500">Respeto</li>
                            <li className="text-secondary-500">Responsabilidad Social</li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* SUB FOOTER */}
            <div className="bg-primary-500">

                <div className="
                max-w-7xlmx-auto
                px-6 py-4 gap-3
                flex flex-col
                md:flex-row
                items-center
                justify-between">
                    <p className="text-xs text-neutral">Desarrollado por Zagal Negocios Corporativos Perú S.A.C.</p>
                    <p className="text-xs text-neutral">© 2022 Zagal Negocios Corporativos Perú S.A.C. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}