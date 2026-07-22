export default function Input({
    className = "",
    ...props
}) {
    return (
        <input
            className={`
                h-11
                w-full
                rounded-xl
                border
                border-[var(--border)]
                bg-[var(--card)]
                px-4
                text-[var(--text)]
                placeholder:text-[var(--text-secondary)]
                outline-none
                transition
                focus:border-[var(--primary)]
                ${className}
            `}
            {...props}
        />
    );
}