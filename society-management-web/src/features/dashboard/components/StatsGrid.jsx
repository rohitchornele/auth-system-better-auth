import KPICard from "./StatCard";

import {
    Users,
    UserRound,
    CircleAlert,
    IndianRupee,
} from "lucide-react";

const stats = [
    {
        title: "Residents",
        value: "324",
        description: "Total registered residents",
        icon: Users,
    },
    {
        title: "Visitors",
        value: "18",
        description: "Today's visitor entries",
        icon: UserRound,
    },
    {
        title: "Complaints",
        value: "7",
        description: "Pending complaints",
        icon: CircleAlert,
    },
    {
        title: "Revenue",
        value: "₹2.4L",
        description: "This month's collection",
        icon: IndianRupee,
    },
];

const StatsGrid = () => {
    return (
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
                <KPICard
                    key={item.title}
                    {...item}
                />
            ))}
        </section>
    );
};

export default StatsGrid;