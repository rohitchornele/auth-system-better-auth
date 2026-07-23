import api from "@/lib/axios";

export const workspaceService = {
  async createWorkspace(data) {
    const response = await api.post("/api/organizations", data);
    return response.data.data;
  },

  async getWorkspaces() {
    const response = await api.get("/api/organizations");
    return response.data.data;
  },

  async getCurrentWorkspace() {
    const response = await api.get("/api/organizations/current");
    return response.data.data;
  },

  async selectWorkspace(organizationId) {
    const response = await api.post("/api/organizations/select", {
      organizationId,
    });

    return response.data.data;
  },
};