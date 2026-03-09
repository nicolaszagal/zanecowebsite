"use client"

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full border-b bg-neutral">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
                {/*Logo*/}
                <div className="img flex fluid items-center">
                    <img src="/public/img/logo.png"/>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-8 text-sm font-medium">
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
                        Contacto
                    </Link>
                </div>
            </div>
        </nav>
    )
}