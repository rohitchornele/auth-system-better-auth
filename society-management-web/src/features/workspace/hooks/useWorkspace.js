
import { useQuery } from "@tanstack/react-query";

import { workspaceService } from "../services/workspace.service";
import { queryKeys } from "@/lib/queryKeys";

export function useWorkspace() {
  const workspaceQuery = useQuery({
    queryKey: queryKeys.workspace.all,
    queryFn: workspaceService.getWorkspaces,
  });

  return {
    workspaces: workspaceQuery.data ?? [],
    isLoading: workspaceQuery.isLoading,
    isError: workspaceQuery.isError,
    error: workspaceQuery.error,
  };
}