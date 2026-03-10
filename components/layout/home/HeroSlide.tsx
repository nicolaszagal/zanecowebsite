import TopProductTag from "@/components/ui/TopProductTag";
import Button from "@/components/ui/Button";

export default function HeroSlide({
                       backgroundImage,
                       title,
                       subtitle,
                       description,
                       buttons,
                   }: {
    backgroundImage: string;
    title: string;
    subtitle: string;
    description: string;
    buttons: { text: string; variant?: "primary" | "secondary" }[];
}) {
    return (
        <div className="relative h-[500px] w-full flex-shrink-0 flex items-center">
            {/* Imagen de fondo */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${backgroundImage}')` }}
            />

            {/* Overlay oscuro con degradado */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-700/80 via-primary-600/40 to-transparent" />

            {/* Contenido */}
            <div className="relative z-10 max-w-6xl ml-10 lg:ml-50 px-6 text-neutral">
                <TopProductTag text="PRODUCTOS DESTACADOS" />

                <h1 className="text-5xl font-extrabold leading-tight mb-4 max-w-150">
                    {title}
                </h1>

                <p className="max-w-xl text-xl font-bold mb-2">{subtitle}</p>
                <p className="max-w-xl text-lg font-extralight mb-8">
                    {description}
                </p>

                <div className="flex gap-4">
                    {buttons.map((button, index) => (
                        <Button
                        key={index}
                        text={button.text}
                        variant={button.variant}/>
                    ))}
                </div>
            </div>
        </div>
    );
}