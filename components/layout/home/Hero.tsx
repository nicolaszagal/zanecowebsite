"use client"
import { useEffect, useState } from "react";
import HeroSlide from "@/components/layout/home/HeroSlide";

type ButtonVariant = "primary" | "secondary";

type HeroButton = {
    text: string;
    variant?: ButtonVariant;
};

type HeroSlideType = {
    backgroundImage: string;
    title: string;
    subtitle: string;
    description: string;
    buttons: HeroButton[];
};

export default function Hero() {

    const slides: HeroSlideType[] = [
        {
            backgroundImage: "/img/home/hero.jpg",
            title: "Mat de Caucho y Etil Vinil Acetato",
            subtitle: "Antifatiga y Antideslizante",
            description: "Ofrecen confort en estaciones de trabajo minimizando los índices de fatiga de los colaboradores.",
            buttons: [
                { text: "Ver Catálogo", variant: "primary" },
                { text: "Solicitar Cotización", variant: "secondary" },
            ],
        },
        {
            backgroundImage: "/img/home/hero2.jpg",
            title: "Losetas de Caucho",
            subtitle: "Antigolpe y Antideslizante",
            description: "Piso antideslizante, posee una óptima resistencia al desliz incluso estando mojado.",
            buttons: [
                { text: "Ver Catálogo", variant: "primary" },
                { text: "Solicitar Cotización", variant: "secondary" },
            ],
        }
    ]

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section className="relative overflow-hidden">
            <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <HeroSlide key={index} {...slide} />
                ))}
            </div>
        </section>
    );
}