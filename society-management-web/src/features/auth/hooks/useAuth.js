import { authClient } from "../services/authClient";

export function useAuth() {
  const {
    data,
    error,
    isPending,
    refetch,
  } = authClient.useSession();

  return {
    user: data?.user ?? null,
    session: data?.session ?? null,

    isAuthenticated: !!data?.session,
    isLoading: isPending,

    error,
    refetch,

    signIn: authClient.signIn.email,
    signUp: authClient.signUp.email,
    signOut: authClient.signOut,
  };
}