import { create } from "zustand";

interface ShoppingCartState {
  count: number
  setCount: () => void
}

export const useShoppingCartStore = create<ShoppingCartState>(set => ({
  count: 0,
  setCount: () => set(state => (
    {count: state.count + 1}
  ))
}))