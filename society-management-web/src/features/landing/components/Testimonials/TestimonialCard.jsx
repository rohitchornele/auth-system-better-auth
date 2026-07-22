import { Quote } from "lucide-react";

export default function TestimonialCard({
    name,
    role,
    company,
    image,
    quote,
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
                hover:shadow-xl
            "
        >
            <Quote
                size={32}
                className="mb-6 text-[var(--primary)] opacity-30"
            />

            <p className="leading-8 text-[var(--text-secondary)]">
                "{quote}"
            </p>

            <div className="mt-8 flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)] font-semibold text-white">
                    {image}
                </div>

                <div>

                    <h4 className="font-semibold text-[var(--text)]">
                        {name}
                    </h4>

                    <p className="text-sm text-[var(--text-secondary)]">
                        {role}
                    </p>

                    <p className="text-sm text-[var(--primary)]">
                        {company}
                    </p>

                </div>

            </div>
        </div>
    );
}