// Võ Minh Tài - 23521382
import * as SecureStore from "expo-secure-store";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { MOCK_ACCOUNT } from "@/constants/mock-account";

interface AuthState {
  isSignedIn: boolean;
  hasHydrated: boolean;
  signIn: (email: string, password: string) => boolean;
  signOut: () => void;
}

const secureStorage = {
  getItem: (name: string) => SecureStore.getItemAsync(name),
  setItem: (name: string, value: string) =>
    SecureStore.setItemAsync(name, value),
  removeItem: (name: string) => SecureStore.deleteItemAsync(name),
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isSignedIn: false,
      hasHydrated: false,
      signIn: (email, password) => {
        const isValid =
          email.trim().toLowerCase() === MOCK_ACCOUNT.email &&
          password === MOCK_ACCOUNT.password;
        set({ isSignedIn: isValid });
        return isValid;
      },
      signOut: () => set({ isSignedIn: false }),
    }),
    {
      name: "auth-session",
      storage: createJSONStorage(() => secureStorage),
      partialize: (state) => ({ isSignedIn: state.isSignedIn }),
      onRehydrateStorage: () => () => {
        useAuthStore.setState({ hasHydrated: true });
      },
    },
  ),
);
