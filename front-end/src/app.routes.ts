import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app-layout/app.layout';
import { Notfound } from './app/pages/notfound/notfound';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', loadComponent: () => import('./app/pages/shop/shop.component').then(m => m.shop) },
            { path: 'documentation', loadComponent: () => import('./app/pages/documentation/documentation').then(m => m.Documentation) },
            { path: 'planning', loadChildren: () => import('./app/pages/pages.routes') },
            { path: 'empty', loadComponent: () => import('./app/pages/empty/empty').then(m => m.Empty) },
        ]
    },
    { path: 'notfound', component: Notfound },
    { path: '**', redirectTo: '/notfound' }
];
