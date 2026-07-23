import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { workspaceService } from "../services/workspace.service";
import { queryKeys } from "@/lib/queryKeys";

export function useCreateWorkspace() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: workspaceService.createWorkspace,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.workspace.all,
      });
    },
  });

  return {
    createWorkspace: mutation.mutateAsync,
    isCreating: mutation.isPending,
  };
}