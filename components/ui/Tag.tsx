type TagProps = {
    text: string;
    variant?: "primary" | "secondary" | "accent";
}

export default function Tag({text, variant = "primary"}: TagProps) {
    const baseStyles = "inline-block px-5 py-2 rounded-full text-xs mb-6";

    const variants = {
        primary: "bg-primary-500/80 border border-primary-300 text-primary-50",
        secondary: "bg-primary-50/30 border border-primary-100 text-primary-200",
        accent: "bg-accent-red border border-accent-red text-neutral",
    }

    return (
        <span className={`${baseStyles} ${variants[variant]}`}>
            {text}
        </span>
    );
}