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
                items: [{ label: 'Shop', icon: 'pi pi-shop', routerLink: ['/'] }]
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
                        url: 'https://github.com/chirag8966/shopping-app',
                        target: '_blank'
                    }
                ]
            },
            {
                label: 'Extras (Integration demo)',
                icon: 'pi pi-fw pi-calendar',
                routerLink: ['/planning'],
                items: [
                    {
                        label: 'Google Maps',
                        icon: 'pi pi-fw pi-cog',
                        routerLink: ['/planning/missions']
                    },
                    {
                        label: 'Scheduler',
                        icon: 'pi pi-fw pi-calendar-plus',
                        routerLink: ['/planning/schedule']
                    },
                ]
            },
        ];
    }
}
