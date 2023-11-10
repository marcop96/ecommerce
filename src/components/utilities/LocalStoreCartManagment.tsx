import { Product } from "../../types";

export function loadCartFromLocalStorage(){
  const cart = localStorage.getItem('cart');
  localStorage.getItem('cartCount');
  if(cart){
    return JSON.parse(cart);
  }
  return [];
}

export function saveCartToLocalStorage(cart: Product[], count: number){
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('cartCount', count.toString());
}
