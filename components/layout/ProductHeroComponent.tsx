import Breadcrumb from "@/components/ui/Breadcrumb";

type HeroProps = {
    title: string
    description: string
    breadcrumbItems?: { label: string, href?: string }[]
    imageUrl: string
    breadcrumbVariant: "primary" | "secondary"
}

export default function ProductHeroComponent({ title, description, imageUrl, breadcrumbItems = [], breadcrumbVariant }: HeroProps) {
    return (
        <section>
            <img className="object-cover w-full h-100 brightness-40" src={imageUrl} alt={title} />
            <div className="max-w-7xl mx-auto relative bottom-10">
                <div className="absolute inset-x-10 bottom-10">
                    {breadcrumbItems.length > 0 && (
                        <div className="mb-6">
                            <Breadcrumb items={breadcrumbItems} variant={breadcrumbVariant} />
                        </div>
                    )}

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-neutral">
                        {title}
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral max-w-2xl leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    )
}