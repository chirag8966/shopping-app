import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { forkJoin, map } from 'rxjs';
import { CartModalComponent } from '../../components/cart-modal/cart-modal.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ApiService } from '../../services/api-service.service';
import { CartService, Product } from '../../services/cart.service';

@Component({
    selector: 'app-shop',
    standalone: true,
    imports: [
        CommonModule, 
        ButtonModule, 
        BadgeModule,
        ProductCardComponent,
        CartModalComponent
    ],
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.scss'],
    providers: [MessageService]
})
export class shop implements OnInit {
    private readonly apiService = inject(ApiService);
    private readonly cartService = inject(CartService);
    private readonly toastService = inject(MessageService);
    
    // Signal for products and loading state
    products = signal<Product[]>([]);
    loading = signal(true);
    
    ngOnInit(): void {
        this.fetchProductsWithOffers();
    }

    /**
     * Fetches both products and offers, then combines them
     */
    fetchProductsWithOffers() {
        this.loading.set(true);
        forkJoin({
            products: this.apiService.getProducts(),
            offers: this.apiService.getOffers()
        }).pipe(
            map(result => {
                return result.products.map(product => {
                    const matchingOffer = result.offers.find(
                        offer => offer.id.toLowerCase() === product.id.toLowerCase()
                    );
                    
                    return {
                        ...product,
                        offer: matchingOffer || undefined
                    };
                });
            })
        ).subscribe({
            next: (productsWithOffers) => {
                this.products.set(productsWithOffers);
                this.loading.set(false);
            },
            error: (err) => {
                console.error('Error fetching data:', err);
                this.loading.set(false);
                this.toastService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Failed to load products. Please try again later.'
                });
            }
        });
    }

    addToCart(product: Product): void {
        this.cartService.addToCart(product);
        this.toastService.add({
            severity: 'success',
            summary: 'Added to Cart',
            detail: `${product.title} has been added to your cart`
        });
    }
    
    getCartItemCount(): number {
        return this.cartService.cartItemCount();
    }
    
    getCartTotal(): number {
        return this.cartService.cartTotal();
    }
    
    showCart(): void {
        this.cartService.showCartModal();
    }
}
