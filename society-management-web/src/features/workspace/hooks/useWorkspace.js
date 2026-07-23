import { useQuery } from "@tanstack/react-query";
import { workspaceKeys } from "../constants/queryKeys";
import { workspaceService } from "../services/workspace.service";

export function useWorkspaces() {
    return useQuery({
        queryKey: workspaceKeys.all,
        queryFn: workspaceService.getWorkspaces,
    });
}