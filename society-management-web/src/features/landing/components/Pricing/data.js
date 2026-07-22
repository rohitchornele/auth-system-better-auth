import {
    Check,
} from "lucide-react";

export const plans = [
    {
        name: "Starter",
        price: "Free",
        description:
            "Perfect for small residential communities getting started.",
        popular: false,
        features: [
            "Up to 50 members",
            "Visitor Management",
            "Digital Notices",
            "Basic Reports",
            "Email Support",
        ],
        button: "Start Free",
        icon: Check,
    },
    {
        name: "Professional",
        price: "₹999",
        period: "/month",
        description:
            "Ideal for growing societies with advanced management needs.",
        popular: true,
        features: [
            "Unlimited Members",
            "Visitor Management",
            "Maintenance Billing",
            "Complaints",
            "Analytics Dashboard",
            "Role Management",
            "Priority Support",
        ],
        button: "Get Started",
        icon: Check,
    },
    {
        name: "Enterprise",
        price: "Custom",
        description:
            "Tailored solutions for large residential communities.",
        popular: false,
        features: [
            "Everything in Professional",
            "Multiple Societies",
            "Custom Integrations",
            "Dedicated Account Manager",
            "Training",
            "24×7 Support",
        ],
        button: "Contact Sales",
        icon: Check,
    },
];