import { Navigate, Outlet, useLocation } from "react-router-dom";

// import Loader from "@/components/common/Loader";

import { useCurrentWorkspace } from "@/features/workspace/hooks/useCurrentWorkspace";

export default function WorkspaceGuard() {
  const location = useLocation();

  const {
    currentWorkspace,
    isLoading,
    isError,
  } = useCurrentWorkspace();

  if (isLoading) {
    return <div className="">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="flex h-full items-center justify-center">
        Failed to load workspace.
      </div>
    );
  }

  if (!currentWorkspace) {
    return (
      <Navigate
        to="/dashboard/workspace"
        state={{ from: location }}
        replace
      />
    );
  }

  return <Outlet />;
}