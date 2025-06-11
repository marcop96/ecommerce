import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

export const useCartStore = defineStore('cart', () => {
  const items = 'ref<CartItem[]>([])'

//   const totalItems = computed(() => 
//     items.value.reduce((sum, item) => sum + item.quantity, 0)
//   )

//   const totalPrice = computed(() => 
//     items.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
//   )

//   function addItem(item: CartItem) {
//     const existingItem = items.value.find(i => i.id === item.id)
//     if (existingItem) {
//       existingItem.quantity += item.quantity
//     } else {
//       items.value.push(item)
//     }
//   }

//   function removeItem(itemId: number) {
//     const index = items.value.findIndex(item => item.id === itemId)
//     if (index > -1) {
//       items.value.splice(index, 1)
//     }
//   }

//   function updateQuantity(itemId: number, quantity: number) {
//     const item = items.value.find(item => item.id === itemId)
//     if (item) {
//       item.quantity = quantity
//     }
//   }

//   function clearCart() {
//     items.value = []
//   }

  return {
    items,
    // totalItems,
    // totalPrice,
    // addItem,
    // removeItem,
    // updateQuantity,
    // clearCart
  }
})

