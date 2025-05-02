import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from '../app-menuitem/app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    templateUrl: './app.menu.html'
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }]
            },
            {
                label: 'Planning',
                icon: 'pi pi-fw pi-calendar',
                routerLink: ['/planning'],
                items: [
                    {
                        label: 'Missions',
                        icon: 'pi pi-fw pi-cog',
                        routerLink: ['/planning/missions']
                    },
                    {
                        label: 'Schedule',
                        icon: 'pi pi-fw pi-calendar-plus',
                        routerLink: ['/planning/schedule']
                    },
                ]
            },
            {
                label: 'Management',
                icon: 'pi pi-fw pi-cog',
                routerLink: ['/planning'],
                items: [
                    {
                        label: 'Drones Inventory',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['management/inventory']
                    },
                    {
                        label: 'On Field',
                        icon: 'pi pi-fw pi-map',
                        routerLink: ['management/field']
                    }
                ]
            },
            {
                label: 'Reports',
                icon: 'pi pi-fw pi-chart-bar',
                routerLink: ['/planning'],
                items: [
                    {
                        label: 'All Flights',
                        icon: 'pi pi-fw pi-history',
                        routerLink: ['/reports/all-flights']
                    },
                    {
                        label: 'Survey Summaries',
                        icon: 'pi pi-fw pi-file',
                        routerLink: ['/reports/survey-summaries']
                    },
                ]
            },
            {
                label: 'Wiki',
                items: [
                    {
                        label: 'Documentation',
                        icon: 'pi pi-fw pi-book',
                        routerLink: ['/documentation']
                    },
                    {
                        label: 'View Source',
                        icon: 'pi pi-fw pi-github',
                        url: 'https://github.com/chirag8966/deltaCapital-drone',
                        target: '_blank'
                    }
                ]
            }
        ];
    }
}
