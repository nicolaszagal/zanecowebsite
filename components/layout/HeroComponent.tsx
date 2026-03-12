import Breadcrumb from "@/components/ui/Breadcrumb";

type HeroProps = {
    title: string
    description: string
    breadcrumbItems?: { label: string, href?: string }[]
}

export default function HeroComponent({ title, description, breadcrumbItems = [] }: HeroProps) {
    return(
        <section className="bg-neutral py-16 md:py-15 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-6">
                    {breadcrumbItems.length > 0 && (
                        <div className="mb-6">
                            <Breadcrumb items={ breadcrumbItems } />
                        </div>
                    )}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary-700">{ title }</h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-700 max-w-2xl leading-relaxed">
                    { description }
                </p>
            </div>
        </section>
    )
}