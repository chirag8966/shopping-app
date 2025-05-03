import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';
import { CartItem, CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-modal',
  standalone: true,
  imports: [CommonModule, DialogModule, ButtonModule, TableModule, InputNumberModule, FormsModule],
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent {
  private cartService = inject(CartService);
  
  cartItems = computed(() => this.cartService.cartItemsSignal());
  visible = computed(() => this.cartService.cartModalVisibleSignal());
  cartTotal = computed(() => this.cartService.cartTotal());
  savings = computed(() => this.cartService.cartSavings());
  
  hideModal(): void {
    this.cartService.hideCartModal();
  }
  
  updateQuantity(item: CartItem): void {
    this.cartService.updateQuantity(item.product.id, item.quantity);
  }
  
  removeItem(productId: string): void {
    this.cartService.removeFromCart(productId);
  }
  
  clearCart(): void {
    this.cartService.clearCart();
  }
  
  getItemTotal(item: CartItem): number {
    return this.cartService.calculatePrice(item.product, item.quantity);
  }
}
