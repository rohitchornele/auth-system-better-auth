import { Loader2 } from "lucide-react";

const variants = {
    primary:
        "bg-[var(--primary)] text-white hover:opacity-90",

    secondary:
        "border border-[var(--border)] bg-[var(--card)] text-[var(--text)] hover:bg-[var(--surface-hover)]",

    ghost:
        "bg-transparent text-[var(--text)] hover:bg-[var(--surface-hover)]",

    danger:
        "bg-[var(--danger)] text-white hover:opacity-90",
};

const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base",
};

export default function Button({
    children,
    variant = "primary",
    size = "md",
    loading = false,
    className = "",
    type = "button",
    ...props
}) {
    return (
        <button
            type={type}
            disabled={loading}
            className={`
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                font-medium
                transition-all
                duration-200
                disabled:cursor-not-allowed
                disabled:opacity-60
                ${variants[variant]}
                ${sizes[size]}
                ${className}
            `}
            {...props}
        >
            {loading && (
                <Loader2
                    size={16}
                    className="animate-spin"
                />
            )}

            {children}
        </button>
    );
}