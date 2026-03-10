export default function TopProductTag({ text }: {text: string}) {
    return (
        <span className="inline-block bg-primary-500/80 border border-primary-300 text-primary-50  px-5 py-2 rounded-full text-xs mb-6">
            {text}
        </span>
    );
}