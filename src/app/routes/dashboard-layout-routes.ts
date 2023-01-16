import { Routes } from '@angular/router';

export const DASHBOARD_LAYOUT: Routes = [
    {path: '', loadChildren:() => import('../components/payee-dashboard/payee-dashboard.module').then(d => d.PayeeDashboardModule)}
]