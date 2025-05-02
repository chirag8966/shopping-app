import { Routes } from '@angular/router';

export default [
    { path: 'all-flights', loadComponent: () => import('./all-flights/all-flights.component').then(m => m.AllFlightsComponent) },
    { path: 'survey-summaries', loadComponent: () => import('./survey-summaries/survey-summaries.component').then(m => m.SurveySummariesComponent) },
    { path: '**', redirectTo: '/notfound' }
] as Routes;    
