const variants = {
    default: "bg-[var(--surface-hover)] text-[var(--text)]",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    danger: "bg-red-100 text-red-700",
};

export default function Badge({
    children,
    variant = "default",
}) {
    return (
        <span
            className={`
                inline-flex
                rounded-full
                px-3
                py-1
                text-xs
                font-medium
                ${variants[variant]}
            `}
        >
            {children}
        </span>
    );
}