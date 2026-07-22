import { Bell } from "lucide-react";

export default function NotificationButton() {
    return (
        <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--surface-hover)]">

            <Bell size={18} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />

        </button>
    );
}