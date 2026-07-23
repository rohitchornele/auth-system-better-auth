import React from "react";

const KPICard = ({ title, value, description, icon: Icon }) => {
    return (
        <div className="rounded-xl border border-(--border) bg-(--card) p-6 transition-all duration-200 hover:shadow-md">

            <div className="mb-6 flex items-center justify-between">

                <div>
                    <p className="text-sm font-medium text-(--text-secondary)">
                        {title}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-(--text)">
                        {value}
                    </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100">
                    <Icon size={22} />
                </div>

            </div>

            <p className="text-sm text-(--text-secondary)">
                {description}
            </p>

        </div>
    );
};

export default KPICard;