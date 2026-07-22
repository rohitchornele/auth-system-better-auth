import { authClient } from "./authClient";

export const authService = {
    async signIn(data) {
        const { error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
        });

        if (error) {
            throw new Error(error.message);
        }
    },

    async signUp(data) {
        const { error } = await authClient.signUp.email({
            name: data.name,
            email: data.email,
            password: data.password,
        });

        if (error) {
            throw new Error(error.message);
        }
    },

    async signOut() {
        const { error } = await authClient.signOut();

        if (error) {
            throw new Error(error.message);
        }
    },

    async getSession() {
        return await authClient.getSession();
    },
};