import { Button } from "@/ui";

export default function PricingCard({
    name,
    price,
    period,
    description,
    features,
    button,
    popular,
    icon: Icon,
}) {
    return (
        <div
            className={`
                relative
                flex
                flex-col
                rounded-3xl
                border
                bg-[var(--card)]
                p-8
                transition-all
                duration-300
                ${
                    popular
                        ? "border-[var(--primary)] shadow-xl scale-105"
                        : "border-[var(--border)]"
                }
            `}
        >
            {popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white">
                    Most Popular
                </div>
            )}

            <h3 className="text-2xl font-bold">
                {name}
            </h3>

            <p className="mt-3 text-[var(--text-secondary)]">
                {description}
            </p>

            <div className="mt-8 flex items-end">

                <span className="text-5xl font-bold">
                    {price}
                </span>

                {period && (
                    <span className="ml-2 text-[var(--text-secondary)]">
                        {period}
                    </span>
                )}

            </div>

            <div className="my-8 h-px bg-[var(--border)]" />

            <div className="space-y-4 flex-1">

                {features.map((feature) => (
                    <div
                        key={feature}
                        className="flex items-center gap-3"
                    >
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary)]/10">
                            <Icon
                                size={14}
                                className="text-[var(--primary)]"
                            />
                        </div>

                        <span>{feature}</span>
                    </div>
                ))}

            </div>

            <Button
                className="mt-10 w-full"
                variant={popular ? "primary" : "secondary"}
            >
                {button}
            </Button>

        </div>
    );
}