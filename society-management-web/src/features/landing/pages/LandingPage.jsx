import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import DashboardPreview from "../components/DashboardPreview/DashboardPreview";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import TrustedMetrics from "../components/TrustedMetrics";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--text)]">
            <Navbar />

            <Hero />
            <Features />
            <DashboardPreview />
            <WhyChooseUs />
            <Testimonials />
            <Pricing />
            <FAQ />
            <TrustedMetrics />
            <CTA />


        </div>
    );
}