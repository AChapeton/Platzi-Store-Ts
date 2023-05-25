import { create } from "zustand";

interface ToggleProductDetailState {
  isProductDetailOpen: boolean
  openProductDetail: () => void
  closeProductDetail: () => void
}

interface ToggleCheckoutState {
  isCheckoutOpen: boolean
  openCheckout: () => void
  closeCheckout: () => void
}

export const useToggleProductDetail = create<ToggleProductDetailState>(set => ({
  isProductDetailOpen: false,
  openProductDetail: () => set(() => (
    {isProductDetailOpen: true}
  )),
  closeProductDetail: () => set(() => (
    {isProductDetailOpen: false}
  ))
}))

export const useToggleCheckout = create<ToggleCheckoutState>(set => ({
  isCheckoutOpen: false,
  openCheckout: () => set(() => (
    {isCheckoutOpen: true}
  )),
  closeCheckout: () => set(() => (
    {isCheckoutOpen: false}
  ))
}))

