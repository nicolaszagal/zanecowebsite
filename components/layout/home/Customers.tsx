export default function Customers() {
    const customers = [
        "/img/customers/1.jpg",
        "/img/customers/2.jpg",
        "/img/customers/3.jpg",
        "/img/customers/4.jpg",
        "/img/customers/5.jpg",
        "/img/customers/6.jpg",
        "/img/customers/7.jpg",
        "/img/customers/8.jpg",
        "/img/customers/9.jpg",
        "/img/customers/10.jpg",
        "/img/customers/11.jpg",
        "/img/customers/12.jpg",
    ]

    return (
        <section className="bg-neutral py-24">

            <div className="max-w-7xl mx-auto px-6">

                {/* TITULO */}
                <div className="text-center mb-20">
                    <h1 className="mb-4">Empresas que confían en nosotros</h1>
                    <p className="max-w-2xl mx-auto text-lg text-secondary-700">
                        Trabajamos con empresas líderes que confían en la calidad
                        de nuestros productos y servicios.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                    {customers.map((customer, index) => (
                        <div
                            key={index}
                            className="group relative flex items-center justify-center bg-white rounded-2xl border border-primary-50 p-10 transition duration-300 hover:scale-110 hover:z-10 hover:shadow-xl"
                        >
                            <img
                                src={customer}
                                alt={`Cliente ${index + 1}`}
                                className="max-h-32 object-contain opacity-40 transition duration-300 group-hover:opacity-100"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}