const activities = [
    "Rahul Sharma entered Gate 2",
    "New notice published",
    "Maintenance payment received",
    "Visitor approved by Flat A-302",
];

const RecentActivities = () => {
    return (
        <div className="rounded-xl border border-(--border) bg-(--card) p-6">

            <h2 className="mb-6 text-lg font-semibold">
                Recent Activities
            </h2>

            <div className="space-y-4">

                {activities.map((activity, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 border-b border-neutral-100 pb-3 last:border-none last:pb-0"
                    >
                        <div className="h-2 w-2 rounded-full bg-black" />

                        <p className="text-sm text-neutral-700">
                            {activity}
                        </p>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default RecentActivities;