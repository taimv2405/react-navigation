import { create } from "zustand";

interface AuthState {
  isSignedIn: boolean;
}

export const useAuthStore = create<AuthState>()(() => ({
  isSignedIn: false,
}));
