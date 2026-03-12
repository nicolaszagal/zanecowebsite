"use client"

import Link from "next/link";

type ProductCardComponentItems = {
    title: string
    href: string
    image: string
}

interface ProductCardComponentProps {
    items: ProductCardComponentItems[]
}

export default function ProductCardComponent({ items }: ProductCardComponentProps) {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="group relative overflow-hidden rounded-xl"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="
                                w-full h-80
                                object-cover
                                brightness-60
                                group-hover:brightness-30
                                group-hover:scale-105
                                transition
                                duration-500
                            "
                        />

                        <div className="absolute inset-x-10 bottom-10 transition-all duration-500">
                            <h2 className="
                            text-neutral
                            text-2xl
                            font-semibold
                            transform
                            transition
                            duration-300
                            group-hover:-translate-y-2
                            ">
                                {item.title}
                            </h2>

                            <p className="
                            text-primary-50
                             text-sm
                             font-medium
                             opacity-0
                             translate-y-6
                             transition-all
                             duration-500
                             group-hover:opacity-100
                             group-hover:translate-y-0
                             ">
                                Ver detalles
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}