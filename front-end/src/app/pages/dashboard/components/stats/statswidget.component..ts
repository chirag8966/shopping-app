import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { StatsService, StatWidget } from '../../../../services/stats.service';

@Component({
    standalone: true,
    selector: 'app-stats-widget',
    imports: [CommonModule],
    templateUrl: 'statswidget.component.html',
    styleUrls: ['statswidget.component.scss']
})
export class StatsWidget implements OnInit {
    statsWidgets: StatWidget[] = [];
    statsService =  inject(StatsService)
    
    // Default fallback data in case API fails
    private defaultStatsWidgets: StatWidget[] = [
        {
            name: 'Total Drones',
            count: 0,
            icon: 'pi pi-sort-alt-slash',
            color: 'cyan',
            highlight: '',
            description: ''
        },
        {
            name: 'On field',
            count: 0,
            icon: 'pi pi-map-marker',
            color: 'green',
            highlight: '',
            description: ''
        },
        {
            name: 'Need Approval',
            count: 0,
            icon: 'pi pi-check-square',
            color: 'blue',
            highlight: '',
            description: ''
        },
        {
            name: 'Service Required',
            count: 0,
            icon: 'pi pi-wrench',
            color: 'orange',
            highlight: '',
            description: ''
        }
    ];

    ngOnInit(): void {
        this.loadStats();
    }

    /**
     * Load stats data from the API
     * Will use fallback data if API call fails
     */
    loadStats(): void {
        this.statsService.getStats().subscribe({
            next: (data) => {
                if (data && data.length > 0) {
                    // Map API data to statsWidgets, preserving icon and color from defaults
                    this.statsWidgets = data.map(item => {
                        // Find matching default item to get icon and color
                        const defaultItem = this.defaultStatsWidgets.find(
                            def => def.name.toLowerCase() === item.name.toLowerCase()
                        );
                        
                        return {
                            ...item,
                            // Use API data but fallback to default values for icon and color
                            icon: item.icon || (defaultItem ? defaultItem.icon : 'pi pi-question'),
                            color: item.color || (defaultItem ? defaultItem.color : 'blue')
                        };
                    });
                } else {
                    // If no data or empty array, use defaults
                    this.statsWidgets = [...this.defaultStatsWidgets];
                }
            },
            error: (err) => {
                console.error('Error fetching stats data:', err);
                // Use default data on error
                this.statsWidgets = [...this.defaultStatsWidgets];
            }
        });
    }
}
