export default function FeatureCard({
    icon: Icon,
    title,
    description,
}) {
    return (
        <div
            className="
                group
                rounded-3xl
                border
                border-[var(--border)]
                bg-[var(--card)]
                p-8
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[var(--primary)]
                hover:shadow-xl
            "
        >
            <div
                className="
                    mb-6
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[var(--primary)]/10
                    text-[var(--primary)]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                "
            >
                <Icon size={28} />
            </div>

            <h3 className="text-xl font-semibold text-[var(--text)]">
                {title}
            </h3>

            <p className="mt-3 leading-7 text-[var(--text-secondary)]">
                {description}
            </p>
        </div>
    );
}