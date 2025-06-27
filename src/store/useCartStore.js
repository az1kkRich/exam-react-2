import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],

      // Add  to cart
      addToCart: (product) =>
        set((state) => {
          const exist = state.cart.find((item) => item.id === product.id);
          if (exist) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
              ),
            };
          } else {
            return { cart: [...state.cart, { ...product, quantity: 1 }] };
          }
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),
      
      // Update count in cart
      updateQuantity: (id, amount) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id
              ? { ...item, quantity: Math.max(1, item.quantity + amount) }
              : item
          ),
        })),


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
