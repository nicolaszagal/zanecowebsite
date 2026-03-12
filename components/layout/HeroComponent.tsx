import Breadcrumb from "@/components/ui/Breadcrumb";

type HeroProps = {
    title: string
    description: string
    breadcrumbItems?: { label: string, href?: string }[]
}

export default function HeroComponent({ title, description, breadcrumbItems = [] }: HeroProps) {
    return(
        <section className="bg-primary-500 py-16 md:py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-6">
                    {breadcrumbItems.length > 0 && (
                        <div className="mb-6">
                            <Breadcrumb items={ breadcrumbItems } />
                        </div>
                    )}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-neutral">{ title }</h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral max-w-2xl leading-relaxed">
                    { description }
                </p>
            </div>
        </section>
    )
}