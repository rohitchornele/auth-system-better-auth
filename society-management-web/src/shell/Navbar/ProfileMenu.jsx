import { ChevronDown } from "lucide-react";
import { useAuth } from "../../features/auth/hooks/useAuth";

export default function ProfileMenu() {
    const { user } = useAuth();

    return (
        <button className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-2 hover:bg-[var(--surface-hover)]">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)] font-semibold text-white">

                {user?.name?.[0]?.toUpperCase()}

            </div>

            <div className="hidden md:block">

                <p className="font-medium">
                    {user?.name}
                </p>

                <p className="text-sm text-[var(--text-secondary)]">
                    {user?.email}
                </p>

            </div>

            <ChevronDown size={18} />

        </button>
    );
}