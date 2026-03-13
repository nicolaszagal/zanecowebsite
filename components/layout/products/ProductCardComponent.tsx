"use client"

type ProductCardComponentItems = {
    title: string
    description: string
    measure: string
    color: string
    application: string
    image1: string
    image2: string
}

interface ProductCardComponentProps {
    items: ProductCardComponentItems[]
}

export default function ProductCardComponent({ items }: ProductCardComponentProps) {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-7xl mx-auto ">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden"
                    >
                        <div className="grid gap-8 md:grid-cols-2 flex-col md:flex-row">
                            <div>
                                <h1 className="py-3">{item.title}</h1>
                                <h2 className="text-primary-700 mb-3 font-semibold">{item.description}</h2>
                                <p className="text-primary-700 font-light text-lg mb-2">
                                    <strong className="font-bold">
                                        Medida:&nbsp;
                                    </strong>
                                    {item.measure}
                                </p>
                                <p className="text-primary-700 font-light text-lg mb-2">
                                    <strong className="font-bold">
                                        Color:&nbsp;
                                    </strong>
                                    {item.color}
                                </p>
                                <p className="text-primary-700 font-light text-lg mb-2">
                                    <strong className="font-bold">
                                        Aplicación:&nbsp;
                                    </strong>
                                    {item.application}
                                </p>
                            </div>
                            <div className="grid gap-8 sm:grid-cols-2">
                                <img
                                    src={item.image1}
                                    alt={item.title}
                                    className="
                                w-full h-50
                                object-cover
                            "
                                />
                                <img
                                    src={item.image1}
                                    alt={item.title}
                                    className="
                                w-full h-50
                                object-cover
                            "
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}