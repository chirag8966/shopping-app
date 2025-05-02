import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app-layout/app.layout';
import { Notfound } from './app/pages/notfound/notfound';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', loadComponent: () => import('./app/pages/dashboard/dashboard').then(m => m.Dashboard) },
            { path: 'documentation', loadComponent: () => import('./app/pages/documentation/documentation').then(m => m.Documentation) },
            { path: 'planning', loadChildren: () => import('./app/pages/pages.routes') },
            { path: 'management/inventory', loadComponent: () => import('./app/pages/management/inventory/inventory.component').then(m => m.InventoryComponent) },
            { path: 'management/field', loadComponent: () => import('./app/pages/management/field/field.component').then(m => m.FieldComponent) },
            { path: 'management/field:id', loadComponent: () => import('./app/pages/management/field/field.component').then(m => m.FieldComponent) },
            { path: 'empty', loadComponent: () => import('./app/pages/empty/empty').then(m => m.Empty) },
            { path: 'reports', loadChildren: () => import('./app/pages/reports/reports.routes') },
        ]
    },
    { path: 'notfound', component: Notfound },
    { path: '**', redirectTo: '/notfound' }
];
