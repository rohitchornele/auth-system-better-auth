const actions = [
    "Add Member",
    "Add Visitor",
    "Create Notice",
    "Raise Complaint",
];

const QuickActions = () => {
    return (
        <div className="rounded-xl border border-(--border) bg-(--card) p-6">

            <h2 className="mb-6 text-lg font-semibold">
                Quick Actions
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">

                {actions.map((action) => (
                    <button
                        key={action}
                        className="rounded-lg border border-neutral-300 px-4 py-3 text-left font-medium transition hover:bg-neutral-100"
                    >
                        {action}
                    </button>
                ))}

            </div>

        </div>
    );
};

export default QuickActions;