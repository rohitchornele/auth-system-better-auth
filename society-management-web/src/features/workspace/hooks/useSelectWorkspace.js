import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { workspaceService } from "../services/workspace.service";
import { queryKeys } from "@/lib/queryKeys";

export function useSelectWorkspace() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: workspaceService.selectWorkspace,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: queryKeys.workspace.current,
      });

      await queryClient.invalidateQueries({
        queryKey: queryKeys.auth.session,
      });
    },
  });

  return {
    selectWorkspace: mutation.mutateAsync,
    isSelecting: mutation.isPending,

    openingWorkspaceId: mutation.isPending
      ? mutation.variables
      : null,
  };
}