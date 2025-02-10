import { Routes } from '@angular/router';
import { MyPageComponent } from './pages/my-page/my-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'landing-page',
        pathMatch: 'full'
    },
    {
        path: 'my-page',
        loadComponent: () => import('./pages/my-page/my-page.component').then(c => c.MyPageComponent)
    },
    {
        path: 'my-record',
        loadComponent: () => import('./pages/my-record/my-records.component').then(c => c.MyRecordsComponent)
    },
    {
        path: 'landing-page',
        loadComponent: () => import('./pages/landing-page/landing-page.component').then(c => c.LandingPageComponent)
    },
];
