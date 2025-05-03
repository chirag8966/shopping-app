import { Routes } from '@angular/router';

export default [
    { path: 'missions', loadComponent: () => import('./extras/missions/missions.component').then(m => m.MissionsComponent) },
    { path: 'schedule', loadComponent: () => import('./extras/schedule/schedule.component').then(m => m.ScheduleComponent) },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
