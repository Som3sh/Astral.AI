import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/types";
import { AlertTriangle } from "lucide-react";
interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
  getTotalItems: () => number;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          currentItems.push({ ...data, quantity: 1 });
        }

        set({ items: [...currentItems] });
        toast.success("Item added to cart.");
      },
      removeItem: (id: string) => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex(
          (item) => item.id === id
        );

        if (existingItemIndex !== -1) {
          const existingItem = currentItems[existingItemIndex];
          if (existingItem.quantity > 1) {
            currentItems[existingItemIndex] = {
              ...existingItem,
              quantity: existingItem.quantity - 1,
            };
          } else {
            currentItems.splice(existingItemIndex, 1);
          }
        }

        set({ items: [...currentItems] });
        toast.success("Item removed from cart.");
      },
      removeAll: () => set({ items: [] }),
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
