import { mockWorkspace, mockWorkspaces } from "@/mocks/workspace";

const delay = (ms = 800) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const workspaceService = {
  async createWorkspace(data) {
    await delay();

    return {
      ...mockWorkspace,
      ...data,
      id: crypto.randomUUID(),
      slug: data.name.toLowerCase().replace(/\s+/g, "-"),
    };
  },

  async getWorkspaces() {
    await delay();

    return mockWorkspaces;
  },

  async getActiveWorkspace() {
    await delay();

    return mockWorkspace;
  },

  async selectWorkspace(workspaceId) {
    await delay();

    return workspaceId;
  },
};