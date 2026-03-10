"use client"

import Link from "next/link";

export default function Navbar() {
    return (
        <div className=" bg-neutral">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-40">
                {/*Logo*/}
                <div className="max-w-7xl img flex fluid items-center">
                    <img src="/img/logo.png" alt="Logo" className="h-40 w-auto object-contain"/>
                </div>
                <div className="max-w-7xl flex space-y-6 gap-x-8">
                    <div className="mx-auto flex">
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </div>
                        <div className="mx-3">
                            <p className="text-sm font-bold">Cercado de Lima</p>
                            <p className="text-xs text-accent">Lima - Perú</p>
                        </div>
                    </div>
                    <div className="mx-auto flex">
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <div className="mx-3">
                            <p className="text-sm font-bold">Escríbenos</p>
                            <p className="text-xs text-accent">zaneco@zanecoperu.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="w-full border-t-1 border-secondary flex items-center justify-center">
                <div className="max-w-7xl items-center mx-auto flex justify-between px-6 h-16">
                  <div className="flex gap-8 text-sm font-medium">
                        <Link href="/" className="hover:text-blue-600 transition">
                            Inicio
                        </Link>

                        <Link href="/about" className="hover:text-blue-600 transition">
                            Nosotros
                        </Link>

                        <Link href="/services" className="hover:text-blue-600 transition">
                            Servicios
                        </Link>

                        <Link href="/contact" className="hover:text-blue-600 transition">
                            Productos
                        </Link>
                      <Link href="/contact" className="hover:text-blue-600 transition">
                          Contacto
                      </Link>
                      <Link href="/contact" className="hover:text-blue-600 transition">
                          Distribuidor
                      </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}