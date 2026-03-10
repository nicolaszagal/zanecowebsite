type ButtonProps = {
    text: string;
    variant?: "primary" | "secondary";
}

export default function Button({text, variant = "primary"}: ButtonProps) {
    const baseStyles = "px-6 py-3 rounded-lg font-medium transition";

    const variants = {
        primary: "bg-primary-500 border-primary-500 text-neutral hover:bg-primary-300 hover:border-primary-300",
        secondary: "bg-neutral text-primary-500 border hover:bg-transparent hover:border-neutral hover:text-neutral"
    }

    return (
        <button className={`${baseStyles} ${variants[variant]}`}>
            {text}
        </button>
    )

}