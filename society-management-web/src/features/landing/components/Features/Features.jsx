import { features } from "./data";
import FeatureCard from "./FeatureCard";

export default function Features() {
    return (
        <section
            id="features"
            className="py-28"
        >
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <span className="rounded-full bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--primary)]">
                        Features
                    </span>

                    <h2 className="mt-6 text-4xl font-bold tracking-tight text-[var(--text)] md:text-5xl">
                        Everything your society needs
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
                        Portl provides all the tools needed to manage
                        residents, visitors, maintenance and communication
                        from a single modern platform.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.title}
                            {...feature}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}