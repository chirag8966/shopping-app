import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DronesService, Drone } from '../../../services/drones.service';

@Component({
    standalone: true,
    selector: 'app-recent-missions',
    imports: [CommonModule, TableModule, ButtonModule, RippleModule],
    template: `<div class="card !mb-8">
        <div class="font-semibold text-xl mb-4">{{ title }}</div>
        <p-table [value]="products" [paginator]="true" [rows]="rows" responsiveLayout="scroll">
            <ng-template #header>
                <tr>
                    <th pSortableColumn="name">Name <p-sortIcon field="name"></p-sortIcon></th>
                    <th pSortableColumn="location">Location <p-sortIcon field="location"></p-sortIcon></th>
                    <th pSortableColumn="battery">Battery <p-sortIcon field="battery"></p-sortIcon></th>
                    <th>View</th>
                </tr>
            </ng-template>
            <ng-template #body let-product>
                <tr>
                    <td style="width: 35%; min-width: 7rem;">{{ product.name }}</td>
                    <td style="width: 25%; min-width: 7rem;">{{ product.location || 'Symbiosis' }}</td>
                    <td style="width: 25%; min-width: 8rem;">
                    <div class="mt-2 md:mt-0 flex items-center">
                        <div class="bg-surface-300 dark:bg-surface-500 rounded-border overflow-hidden w-40 lg:w-24" style="height: 8px">
                            <div [ngClass]="{'bg-green-500': product.battery >= 70, 'bg-orange-500': product.battery >= 30 && product.battery < 70, 'bg-red-500': product.battery < 30}" class="h-full" [style.width.%]="product.battery"></div>
                        </div>
                        <span [ngClass]="{'text-green-500': product.battery >= 70, 'text-orange-500': product.battery >= 30 && product.battery < 70, 'text-red-500': product.battery < 30}" class="ml-4 font-medium">{{ product.battery }}%</span>
                    </div>
                    </td>
                    <td style="width: 15%;">
                        <button pButton pRipple type="button" icon="pi pi-search" class="p-button p-component p-button-text p-button-icon-only" (click)="navigateToField(product)" ></button>
                    </td>
                </tr>
            </ng-template>
        </p-table>
    </div>`,
})
export class RecentMissions implements OnInit {
    @Input() rows: number = 5;
    @Input() title: string = 'Recent Missions';
    @Input() id: string | null = null;
    products: {id: string, name: string, location: string, battery: number}[] = [];
    router = inject(Router)
    dronesService = inject(DronesService)
    
    // For loading state and error handling
    loading: boolean = false;
    error: string | null = null;

    ngOnInit() {
        this.fetchDrones();
    }
    
    /**
     * Fetch drones data from the API
     */
    fetchDrones(): void {
        this.loading = true;
        this.error = null;
        let service = this.dronesService.getDrones();
        if(this.id) {
            service = this.dronesService.getDroneById(this.id);
        }
        service.subscribe({
            next: (drones) => {
                // Map drone data to the format expected by the table
                this.products = this.mapDronesToProducts(drones);
                this.loading = false;
            },
            error: (err) => {
                console.error('Error fetching drones:', err);
                this.error = 'Failed to load drone data';
                this.loading = false;
                
                // Use default data if API fails
                this.setDefaultProducts();
            }
        });
    }
    
    /**
     * Maps drone data from API to the format needed for the table
     */
    private mapDronesToProducts(drones: Drone[]): {id: string, name: string, location: string, battery: number}[] {
        return drones.map(drone => ({
            id: drone.id.toString(),
            name: drone.name,
            location: `Field ${drone.id}`, // Or any location mapping logic
            battery: drone.battery // Using battery level as the "battery" field
        }));
    }
    
    /**
     * Sets default products data when API fails
     */
    private setDefaultProducts(): void {
        this.products = [
            {
                id: '1',
                name: 'Field 1',
                location: 'Location 1',
                battery: 100
            },
            {
                id: '2',
                name: 'Field 2',
                location: 'Location 2',
                battery: 200
            },
            {
                id: '3',
                name: 'Field 3',
                location: 'Location 3',
                battery: 300
            }
        ];
    }

    navigateToField(product: {id: string, name: string, location: string, battery: number}) {
        this.router.navigate(['/management/field'], {
            queryParams: { id: product.id }
        });
    }
}
