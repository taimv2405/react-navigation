import { create } from "zustand";

interface FavouritesState {
  favouriteIds: string[];
}

export const useFavouritesStore = create<FavouritesState>()(() => ({
  favouriteIds: ["item-1", "item-2", "item-3"],
}));
