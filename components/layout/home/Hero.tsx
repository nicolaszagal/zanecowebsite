"use client"
import { useEffect, useState, useRef, useCallback } from "react";
import HeroSlide from "@/components/layout/home/HeroSlide";

type ButtonVariant = "primary" | "secondary";

type HeroButton = {
    text: string;
    variant?: ButtonVariant;
    href?: string;
};

type HeroSlideType = {
    backgroundImage: string;
    title: string;
    subtitle: string;
    description: string;
    category: string;
    buttons: HeroButton[];
};

export default function Hero() {
    const whatsappLink = "https://wa.me/51994999955";

    const slides: HeroSlideType[] = [
        {
            backgroundImage: "/img/home/hero.jpg",
            title: "Mat de Caucho y Etil Vinil Acetato",
            subtitle: "Antifatiga y Antideslizante",
            description: "Ofrecen confort en estaciones de trabajo minimizando los índices de fatiga de los colaboradores.",
            category: "alfombras",
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
            category: "losetas",
            buttons: [
                { text: "Ver Catálogo", variant: "primary" },
                { text: "Solicitar Cotización", variant: "secondary" },
            ],
        },
        {
            backgroundImage: "/img/home/hero3.jpg",
            title: "Alfombras de Caucho",
            subtitle: "Antifatiga Antideslizante",
            description: "LEY 29783. - Ley de seguridad y salud en el trabajo.",
            category: "alfombras",
            buttons: [
                { text: "Ver Catálogo", variant: "primary" },
                { text: "Solicitar Cotización", variant: "secondary" },
            ],
        },
        {
            backgroundImage: "/img/home/hero4.jpg",
            title: "Pisos Temporales de HDPE",
            subtitle: "Plataformas de trabajo o protección de suelos",
            description: "Resistentes y ligeros, uso minero o para eventos.",
            category: "otros",
            buttons: [
                { text: "Ver Catálogo", variant: "primary" },
                { text: "Solicitar Cotización", variant: "secondary" },
            ],
        },
        {
            backgroundImage: "/img/home/hero5.jpg",
            title: "Losetas de Vinil",
            subtitle: "Áreas húmedas",
            description: "Sistéma de drenaje con uniones laterales.",
            category: "otros",
            buttons: [
                { text: "Ver Catálogo", variant: "primary" },
                { text: "Solicitar Cotización", variant: "secondary" },
            ],
        },
        {
            backgroundImage: "/img/home/hero6.jpg",
            title: "Precintos de seguridad",
            subtitle: "Personalizable",
            description: "Logo y numeración correlativa",
            category: "otros",
            buttons: [
                { text: "Ver Catálogo", variant: "primary" },
                { text: "Solicitar Cotización", variant: "secondary" },
            ],
        },
        {
            backgroundImage: "/img/home/hero7.jpg",
            title: "Piso temporal de Polietileno de Alta densidad AB-012",
            subtitle: "Piso antideslizante",
            description: "Alto tránsito - Accesos y caminos.",
            category: "otros",
            buttons: [
                { text: "Ver Catálogo", variant: "primary" },
                { text: "Solicitar Cotización", variant: "secondary" },
            ],
        },
        {
            backgroundImage: "/img/home/hero8.jpg",
            title: "Rollo de vinil para piscinas",
            subtitle: "Piso antideslizante",
            description: "Diseño tramado para drenado de líquidos",
            category: "rollos",
            buttons: [
                { text: "Ver Catálogo", variant: "primary" },
                { text: "Solicitar Cotización", variant: "secondary" },
            ],
        }
    ];
    const slidesWithLinks = slides.map((slide) => ({
        ...slide,
        buttons: slide.buttons.map((button) => ({
            ...button,
            href:
                button.text === "Ver Catálogo"
                    ? `/products/${slide.category}`
                    : whatsappLink,
        })),
    }));

    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Clear and restart interval
    const resetInterval = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);
    }, [slides.length]);

    useEffect(() => {
        resetInterval();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [resetInterval]);

    // Wrap controller handlers to reset timer after manual change
    const goToPrevious = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
        resetInterval();
    };

    const goToNext = () => {
        setCurrentSlide((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1
        );
        resetInterval();
    };

    const goToSlide = (idx: number) => {
        setCurrentSlide(idx);
        resetInterval();
    };

    return (
        <section className="relative overflow-hidden">
            <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slidesWithLinks.map((slide, index) => (
                    <HeroSlide key={index} {...slide} />
                ))}
            </div>
            {/* Slide controllers */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
                <button
                    aria-label="Anterior"
                    onClick={goToPrevious}
                    className="bg-neutral-800/60 text-white px-3 py-2 rounded-full hover:bg-neutral-700 transition"
                >
                    &#8592;
                </button>
                <div className="flex gap-2 items-center">
                    {slidesWithLinks.map((_, idx) => (
                        <button
                            key={idx}
                            className={`w-3 h-3 rounded-full transition ${
                                idx === currentSlide
                                    ? "bg-neutral"
                                    : "bg-primary-500"
                            }`}
                            onClick={() => goToSlide(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
                <button
                    aria-label="Siguiente"
                    onClick={goToNext}
                    className="bg-neutral-800/60 text-white px-3 py-2 rounded-full hover:bg-neutral-700 transition"
                >
                    &#8594;
                </button>
            </div>
        </section>
    );
}