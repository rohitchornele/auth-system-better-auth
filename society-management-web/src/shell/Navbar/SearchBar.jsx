import { Search } from "lucide-react";

export default function SearchBar() {
    return (
        <div className="hidden lg:flex">

            <div className="flex w-80 items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-2">

                <Search
                    size={18}
                    className="text-[var(--text-secondary)]"
                />

                <input
                    placeholder="Search members, visitors..."
                    className="w-full bg-transparent outline-none placeholder:text-[var(--text-secondary)]"
                />

            </div>

        </div>
    );
}