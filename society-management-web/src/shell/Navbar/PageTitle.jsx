import { useLocation } from "react-router-dom";

const titles = {
    "/dashboard": {
        title: "Dashboard",
        subtitle: "Overview of your society",
    },

    "/members": {
        title: "Members",
        subtitle: "Manage society residents",
    },

    "/visitors": {
        title: "Visitors",
        subtitle: "Today's visitor activity",
    },

    "/maintenance": {
        title: "Maintenance",
        subtitle: "Maintenance collections",
    },

    "/settings": {
        title: "Settings",
        subtitle: "Workspace preferences",
    },
};

export default function PageTitle() {
    const { pathname } = useLocation();

    const page =
        titles[pathname] ??
        {
            title: "Dashboard",
            subtitle: "",
        };

    return (
        <div>

            <h1 className="text-xl font-semibold text-[var(--text)]">
                {page.title}
            </h1>

            <p className="text-sm text-[var(--text-secondary)]">
                {page.subtitle}
            </p>

        </div>
    );
}