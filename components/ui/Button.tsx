import Link from "next/link";

type ButtonProps = {
    text: string;
    variant?: "primary" | "secondary";
    href?: string;
}

export default function Button({text, variant = "primary", href}: ButtonProps) {
    const baseStyles = "px-6 py-3 rounded-lg font-medium transition";

    const variants = {
        primary: "bg-primary-500 border-primary-500 text-neutral hover:bg-primary-300 hover:border-primary-300",
        secondary: "bg-neutral text-primary-500 border hover:bg-transparent hover:border-neutral hover:text-neutral"
    };

    const className = `${baseStyles} ${variants[variant]}`;

    if (href) {
        const isExternalLink = href.startsWith("http");

        if (isExternalLink) {
            return (
                <a href={href} className={className} target="_blank" rel="noopener noreferrer">
                    {text}
                </a>
            );
        }

        return (
            <Link href={href} className={className}>
                {text}
            </Link>
        );
    }

    return (
        <button className={className}>
            {text}
        </button>
    );

}