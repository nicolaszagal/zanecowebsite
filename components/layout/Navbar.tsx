"use client"

import Link from "next/link";

export default function Navbar() {
    return (
        <div className="bg-neutral sticky top-0 z-50 w-full shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
                {/*Logo*/}
                <div className="flex img fluid items-center justify-center md:justify-start">
                    <img src="/img/logo.png" alt="Logo" className="w-32 lg:w-48 object-contain"/>
                </div>
                <div className="max-w-7xl flex gap-y-6 gap-x-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

                        {/* CONTACT INFO */}
                        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-6">

                            {/* UBICACIÓN */}
                            <div className="flex items-center gap-3 text-center sm:text-left">
                                <div className="hidden md:flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                                    </svg>
                                </div>

                                <div>
                                    <p className="text-xs md:text-sm font-bold">Cercado de Lima</p>
                                    <p className="text-xs text-secondary-700">Lima - Perú 🇵🇪</p>
                                </div>
                            </div>

                            {/* EMAIL */}
                            <div className="flex items-center gap-3 text-center sm:text-left">
                                <div className="hidden md:flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs md:text-sm font-bold">Escríbenos</p>
                                    <p className="text-xs text-secondary-700">zaneco@zanecoperu.com</p>
                                </div>
                            </div>

                            {/* ATENCIÓN */}
                            <div className="flex items-center gap-3 text-center sm:text-left">
                                <div className="hidden md:flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </div>

                                <div>
                                    <p className="text-xs md:text-sm font-bold">+51 994 999 955</p>
                                    <p className="text-xs text-secondary-700">Lun - Vie 8:30 - 18:30</p>
                                </div>
                            </div>

                        </div>


                        {/* SOCIAL MEDIA */}
                        <div className="flex items-center gap-6">

                            {/* Facebook */}
                            <a href="https://www.facebook.com/people/Zaneco-Perú/100063585188615/" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="currentColor" style={{color:"#1877f2"}} viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a href="https://www.instagram.com/zanecoperu/" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-6 sm:w-5 sm:h-5" fill="currentColor" style={{ color: "#c13584" }} viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>

                            {/* YouTube */}
                            <a href="https://www.youtube.com/@zanecosolution3433" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-6 sm:w-5 sm:h-5" fill="currentColor" style={{ color: "#ff0000" }} viewBox="0 0 24 24">\
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                </svg>
                            </a>

                        </div>

                    </div>
                </div>
            </div>
            <nav className="w-full border-t-1 border-secondary-50 flex items-center justify-center">
                <div className="max-w-7xl items-center mx-auto flex justify-between px-6 h-16">
                  <div className="flex gap-8 text-sm text-primary-700 text font-bold font-heading">
                      <Link href="/" className="hover:text-primary-400 transition">
                          INICIO
                      </Link>
                      <Link href="/about" className="hover:text-primary-400 transition">
                          NOSOTROS
                      </Link>

                      <Link href="/products" className="hover:text-primary-400 transition">
                          PRODUCTOS
                      </Link>

                      <Link href="/contact" className="hover:text-primary-400 transition">
                          CONTACTO
                      </Link>

                      <Link href="/distributor" className="hover:text-primary-400 transition">
                          DISTRIBUIDOR
                      </Link>
                  </div>
                </div>
            </nav>
        </div>
    )
}