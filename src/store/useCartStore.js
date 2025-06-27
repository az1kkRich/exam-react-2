import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],

      // Add  to cart
      addToCart: (item) => {
        const exists = get().cart.find((i) => i.id === item.id);
        if (exists) return;
        set({ cart: [...get().cart, item] });
      },

      removeFromCart: (id) =>
        set({ cart: get().cart.filter((item) => item.id !== id) }),


      // add to Wishlist 
      addWishlist: (item) => {
        const exists = get().wishlist.find((i) => i.id === item.id);
        if (exists) {
          set({ wishlist: get().wishlist.filter((i) => i.id !== item.id) });
        } else {
          set({ wishlist: [...get().wishlist, item] });
        }
      },

      removeFromWishlist: (id) =>
        set({ wishlist: get().wishlist.filter((i) => i.id !== id) }),
    }),
    {
      name: 'cart-storage', // localStorage key
    }
  )
);
