import BenefitCard from "./BenefitCard";
import { benefits } from "./data";

export default function WhyChooseUs() {
    return (
        <section className="bg-[var(--background)] py-28">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto mb-20 max-w-3xl text-center">

                    <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-[var(--primary)]">
                        Why Portl
                    </span>

                    <h2 className="mt-6 text-4xl font-bold tracking-tight text-[var(--text)] md:text-5xl">
                        Built for modern residential communities
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
                        Everything you need to manage residents,
                        visitors, maintenance, communication and finances
                        with one modern platform.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {benefits.map((benefit) => (
                        <BenefitCard
                            key={benefit.title}
                            {...benefit}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}