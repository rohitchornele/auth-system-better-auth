export default function Avatar({
    name = "",
    size = "md",
}) {
    const sizes = {
        sm: "h-8 w-8 text-xs",
        md: "h-10 w-10 text-sm",
        lg: "h-14 w-14 text-lg",
    };

    return (
        <div
            className={`
                flex
                items-center
                justify-center
                rounded-full
                bg-[var(--primary)]
                font-semibold
                text-white
                ${sizes[size]}
            `}
        >
            {name.charAt(0).toUpperCase()}
        </div>
    );
}