// Võ Minh Tài - 23521382
import { create } from "zustand";

import { MOCK_ACCOUNT } from "@/constants/mock-account";

interface AuthState {
  isSignedIn: boolean;
  signIn: (email: string, password: string) => boolean;
  signOut: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  isSignedIn: false,
  signIn: (email, password) => {
    const isValid =
      email.trim().toLowerCase() === MOCK_ACCOUNT.email &&
      password === MOCK_ACCOUNT.password;
    set({ isSignedIn: isValid });
    return isValid;
  },
  signOut: () => set({ isSignedIn: false }),
}));
