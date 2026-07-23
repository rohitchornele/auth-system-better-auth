import { useQuery } from "@tanstack/react-query";

import { workspaceService } from "../services/workspace.service";
import { queryKeys } from "@/lib/queryKeys";

export function useCurrentWorkspace() {
  const query = useQuery({
    queryKey: queryKeys.workspace.current,
    queryFn: workspaceService.getCurrentWorkspace,
    retry: false,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  return {
    currentWorkspace: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
  };
}