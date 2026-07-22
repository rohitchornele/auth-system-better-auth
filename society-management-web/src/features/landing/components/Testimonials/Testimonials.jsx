import { testimonials } from "./data";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="py-28"
        >
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto mb-20 max-w-3xl text-center">

                    <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-[var(--primary)]">
                        Testimonials
                    </span>

                    <h2 className="mt-6 text-4xl font-bold tracking-tight text-[var(--text)] md:text-5xl">
                        Loved by housing communities
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
                        See how committees and managers simplify
                        their daily operations with Portl.
                    </p>

                </div>

                <div className="grid gap-8 lg:grid-cols-3">

                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.name}
                            {...testimonial}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}