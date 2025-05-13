import { computed, inject, Injectable, signal } from '@angular/core';
import { MessageService } from 'primeng/api';

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  offer?: {
    id: string;
    offer: string;
    offerDescription: string;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private toastService = inject(MessageService);
  
  // Cart items signal
  public cartItemsSignal = signal<CartItem[]>([]);
  public cartModalVisibleSignal = signal<boolean>(false);
  public cartItemCount = computed(() => {
    let count = 0;
    this.cartItemsSignal().forEach(item => {
      count += item.quantity;
    });
    return count;
  });
  
  public cartTotal = computed(() => {
    let total = 0;
    this.cartItemsSignal().forEach(item => {
      total += this.calculatePrice(item.product, item.quantity);
    });
    return total;
  });
  
  public cartSavings = computed(() => {
    let savings = 0;
    this.cartItemsSignal().forEach(item => {
      const regularPrice = item.product.price * item.quantity;
      const discountedPrice = this.calculatePrice(item.product, item.quantity);
      savings += (regularPrice - discountedPrice);
    });
    return savings;
  });
  
  /**
   * Adds a product to the cart
   * Handles special offers automatically
   */
  addToCart(product: Product): void {
    const items = this.cartItemsSignal();
    const existingItemIndex = items.findIndex(item => item.product.id === product.id);
    
    if (existingItemIndex >= 0) {
      // Update quantity if already in cart
      this.cartItemsSignal.update(items => {
        const newItems = [...items];
        const currentQuantity = newItems[existingItemIndex].quantity;
        
        // For 1+1 offers, increment by 2 each time
        const incrementAmount = (product.offer?.offer === '1+1') ? 2 : 1;
        
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: currentQuantity + incrementAmount
        };
        return newItems;
      });
    } else {
      // For 1+1 offers, automatically add 2 items
      const quantity = (product.offer?.offer === '1+1') ? 2 : 1;
      // Add new item if not in cart
      this.cartItemsSignal.update(items => [...items, { product, quantity }]);
    }
    
    // Show notification
    this.toastService.add({
      severity: 'success',
      summary: 'Added to Cart',
      detail: `${product.title} has been added to your cart`
    });
  }
  
  removeFromCart(productId: string): void {
    this.cartItemsSignal.update(items => 
      items.filter(item => item.product.id !== productId)
    );
    
    this.toastService.add({
      severity: 'info',
      summary: 'Removed from Cart',
      detail: 'Item has been removed from your cart'
    });
  }
  
  /**
   * Updates the quantity of an item in the cart
   */
  updateQuantity(productId: string, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }
    
    this.cartItemsSignal.update(items => {
      return items.map(item => 
        item.product.id === productId 
          ? { ...item, quantity } 
          : item
      );
    });
  }
  
  clearCart(): void {
    this.cartItemsSignal.set([]);
    
    this.toastService.add({
      severity: 'info',
      summary: 'Cart Cleared',
      detail: 'All items have been removed from your cart'
    });
  }
  
  showCartModal(): void {
    this.cartModalVisibleSignal.set(true);
  }
  
  hideCartModal(): void {
    this.cartModalVisibleSignal.set(false);
  }
  
  /**
   * Calculates the effective price based on offer type and quantity
   */
  calculatePrice(product: Product, quantity: number): number {
    if (!product.offer) {
      return product.price * quantity;
    }

    // Apply offer calculations based on offer type
    switch (product.offer.offer) {
      case '1+1': // Buy one get one free
        const freeBies = Math.floor(quantity / 2);
        return product.price * (quantity - freeBies);
        
      case '3for2': {
        const discountSets = Math.floor(quantity / 3);
        const remainder = quantity % 3;
        return product.price * (2 * discountSets + remainder);
      } // Three for the price of two

      case '6for4': {
        const discountsSets = Math.floor(quantity / 6);
        const remainder = quantity % 6;
        return product.price * (4 * discountsSets + remainder);
      }
        
      default:
        return product.price * quantity;
    }
  }
}
