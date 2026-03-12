"use client"
import HeroComponent from "@/components/layout/HeroComponent";
import ProductCardComponent from "@/components/layout/products/ProductCardComponent";

export default function Products() {
    return(
        <section>
            <HeroComponent
                title="Nuestros Productos"
                description="Ofrecemos una amplia gama de soluciones para mejorar tu espacio de trabajo o tu hogar."
                breadcrumbItems={[
                    { label: "Inicio", href: "/" },
                    { label: "Productos" }
                ]}
            />
            <ProductCardComponent
                items={[
                    { title: "Alfombras Antifatiga y Antideslizante", href: "/products/alfombras", image: "/img/product/product1.jpg" },
                    { title: "Losetas de Caucho", href: "/products/losetas", image: "/img/product/product2.jpg" },
                    { title: "Rollos de Caucho", href: "/products/rollos", image: "/img/product/product3.jpg" },
                    { title: "RaceTrack", href: "/products/race-track", image: "/img/product/product4.jpg" },
                    { title: "Pediluvios", href: "/products/pediluvios", image: "/img/product/product5.jpg" },
                    { title: "Grass Sintético", href: "/products/grass-sintetico", image: "/img/product/product6.jpg" },
                    { title: "Otros Productos", href: "/products/otros", image: "/img/product/product7.jpg" },
                ]}
            />
        </section>
    )
}