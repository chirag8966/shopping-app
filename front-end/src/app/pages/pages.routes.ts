import { Routes } from '@angular/router';
import { ScheduleComponent } from './planning/schedule/schedule.component';

export default [
    { path: 'missions', loadComponent: () => import('./planning/missions/missions.component').then(m => m.MissionsComponent) },
    { path: 'schedule', component: ScheduleComponent },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
