import Button from "@/components/ui/Button";

export default function Hero() {
    return (
        <section className="relative h-[500px] w-full flex items-center">
            {/* Imagen de fondo */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/img/home/hero.jpg')" }}/>

            {/* Overlay oscuro con degradado */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-700/80 via-primary-600/40 to-transparent" />

            {/* Contenido */}
            <div className="relative z-10 max-w-6xl ml-10 lg:ml-50 px-6 text-neutral">

                <span className="inline-block bg-primary-500/80 border border-primary-300 text-primary-50  px-5 py-2 rounded-full text-xs mb-6">
                     PRODUCTOS DESTACADOS
                </span>

                <h1 className="text-5xl font-extrabold leading-tight mb-4">
                    Mat de Caucho y Etil<br/>
                    Vinil Acetato
                </h1>

                <p className="max-w-xl text-xl font-bold  mb-2">
                    Antifatiga y Antideslizante.
                </p>
                <p className="max-w-xl text-lg font-extralight mb-8">
                    Ofrecen confort en estaciones de trabajo minimizando los índices de fatiga de los colaboradores.
                </p>

                <div className="flex gap-4">
                    <Button text="Ver Catálogo" />
                    <Button text="Solicitar Cotización" variant="secondary" />
                </div>
            </div>
        </section>
    );
}
