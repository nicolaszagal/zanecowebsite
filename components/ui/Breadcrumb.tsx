"use client"

import Link from "next/link";

type BreadcumbItem = {
    label: string
    href?: string
}

interface BreadcrumbProps {
    items: BreadcumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return(
        <nav className="flex items center gap-2 text-sm">
            {items.map((item, index) => {
                const isLast = index === items.length - 1

                return(
                    <div key={index} className="flex items-center gap-2">
                        {!isLast ? (
                            <Link
                                href={item.href || "#"}
                                className="
                                flex items-center gap-2
                                text-primary-300
                                hover:text-primary-700
                                text-sm font-semibold
                                transition-all
                                duration-200
                                group"
                            >
                                <span className="transition-transform duration-200 group-hover:translate-y-[1px]">
                                    {item.label}
                                </span>
                            </Link>
                        ) : (
                            <span className="text-primary-700 flex items-center gap-2 text-sm font-semibold">
                                {item.label}
                            </span>
                        )}

                        {!isLast && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4 text-slate-600 text-primary-700"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                            </svg>
                        )}
                    </div>
                )
            })}
        </nav>
    )
}