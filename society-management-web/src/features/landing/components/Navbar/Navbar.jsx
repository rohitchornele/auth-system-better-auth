import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/ui";
import MobileMenu from "./MobileMenu";

const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
            <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-bold tracking-tight text-[var(--text)]"
                >
                    PORTL
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-[var(--text-secondary)] transition hover:text-[var(--primary)]"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden items-center gap-3 md:flex">
                    <NavLink to="/login">
                        <Button variant="ghost">
                            Login
                        </Button>
                    </NavLink>

                    <NavLink to="/register">
                        <Button>
                            Get Started
                        </Button>
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="rounded-lg p-2 md:hidden"
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            <MobileMenu
                open={isOpen}
                onClose={() => setIsOpen(false)}
                links={navLinks}
            />
        </header>
    );
}